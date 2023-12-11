import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

import RouteList from "./RouteList";
import NavBar from "./NavBar";

function App() {
  const [dogs, setDogs] = useState({
    data: [],
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    async function loadDogs() {
      try {
        const response = await axios.get("http://localhost:5001/dogs");
        setDogs({
          data: response.data,
          isLoading: false,
          error: null,
        });
      } catch (error) {
        setDogs({
          data: [],
          isLoading: false,
          error: "Error loading data. Please try again later.",
        });
      }
    }
    loadDogs();
  }, []);

  return (
    <div>
      <h1>Welcome!</h1>
      <BrowserRouter>
        <NavBar dogs={dogs.data} />
        <div className="container">
          {dogs.isLoading ? (
            <h2>Loading...</h2>
          ) : dogs.error ? (
            <h2>{dogs.error}</h2>
          ) : (
            <RouteList dogs={dogs.data} />
          )}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
