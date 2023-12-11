import { MemoryRouter } from 'react-router-dom';
import DogDetails from './DogDetails';
import { render, screen } from '@testing-library/react';
import dogs from './_testCommon';

test('renders DogDetails component', () => {
  render(
    <MemoryRouter>
      <DogDetails dog={dogs[0]} />
    </MemoryRouter>
  );

  const nameElement = screen.getByText(dogs[0].name);
  expect(nameElement).toBeInTheDocument();

  const ageElement = screen.getByText(`${dogs[0].age} years old`);
  expect(ageElement).toBeInTheDocument();

  const factElement = screen.getByText(dogs[0].facts[0]);
  expect(factElement).toBeInTheDocument();

  const goBackLink = screen.getByText('Go Back');
  expect(goBackLink).toBeInTheDocument();
});
