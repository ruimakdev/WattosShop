import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { StarshipCard } from "../components/Card";
import { Starship } from "../types";

export const mockStarship: Starship = {
  name: "X-Wing",
  model: "T-65B X-wing starfighter",
  manufacturer: "Incom Corporation",
  cost_in_credits: "149999",
  length: "12.5",
  max_atmosphering_speed: "1050",
  crew: "1",
  passengers: "0",
  cargo_capacity: "110",
  consumables: "1 week",
  hyperdrive_rating: "1.0",
  MGLT: "100",
  starship_class: "Starfighter",
  pilots: [],
  films: [
    "https://swapi.dev/api/films/1/",
    "https://swapi.dev/api/films/2/",
    "https://swapi.dev/api/films/3/",
  ],
  created: "2014-12-12T11:19:05.340000Z",
  edited: "2014-12-20T21:23:49.886000Z",
  url: "https://swapi.dev/api/starships/12/",
};


const mockOnBuy = jest.fn();

test("renders StarshipCard with correct information", () => {
  render(<StarshipCard starship={mockStarship} onBuy={mockOnBuy} />);

  expect(screen.getByText("X-Wing")).toBeInTheDocument();
  expect(screen.getByText("Model: T-65B X-wing starfighter")).toBeInTheDocument();
  expect(screen.getByText("Manufacturer: Incom Corporation")).toBeInTheDocument();
  expect(screen.getByText("149999 credits")).toBeInTheDocument();
});

test("increases and decreases quantity", () => {
  render(<StarshipCard starship={mockStarship} onBuy={mockOnBuy} />);

  const decreaseButton = screen.getByText("-");
  const increaseButton = screen.getByText("+");
  const quantityInput = screen.getByRole("spinbutton");

  expect(quantityInput).toHaveValue(1);

  fireEvent.click(increaseButton);
  expect(quantityInput).toHaveValue(2);

  fireEvent.click(decreaseButton);
  expect(quantityInput).toHaveValue(1);
});

test("triggers onBuy when buy button is clicked", () => {
  render(<StarshipCard starship={mockStarship} onBuy={mockOnBuy} />);

  const buyButton = screen.getByText("BUY");
  fireEvent.click(buyButton);

  expect(mockOnBuy).toHaveBeenCalledWith(mockStarship.name, 1); // 1 is the default quantity
});
