import React from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

function DogList({ dogs }) {
  const gridColClass = "col-3 text-center";
  const imageBasePath = "/";

  return (
    <div className="DogList">
      <div className="row mt-4">
        <div className="col">
          <h2 className="text-center">
            HELLO. WE HAVE DOGS. CLICK ON THEM FOR MORE INFO.
          </h2>
        </div>
      </div>
      <div className="row">
        {dogs.map((d) => (
          <div className={gridColClass} key={d.name}>
            <img src={`${imageBasePath}${d.src}.jpg`} alt={d.name} />
            <h3 className="mt-3">
              <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogList;
