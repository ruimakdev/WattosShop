import React from 'react';  // Added import
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { StarshipCard } from "../components/Card";

// Mock data for a starship
const mockStarship = {
  name: "Millennium Falcon",
  model: "YT-1300 light freighter",
  manufacturer: "Corellian Engineering Corporation",
  cost_in_credits: "1000000",
};

// Mock function for the onBuy prop
const mockOnBuy = jest.fn();

test("renders StarshipCard with correct information", () => {
  render(<StarshipCard starship={mockStarship} onBuy={mockOnBuy} />);

  expect(screen.getByText("Millennium Falcon")).toBeInTheDocument();
  expect(screen.getByText("Model: YT-1300 light freighter")).toBeInTheDocument();
  expect(screen.getByText("Manufacturer: Corellian Engineering Corporation")).toBeInTheDocument();
  expect(screen.getByText("1000000 credits")).toBeInTheDocument();
});

test("increases and decreases quantity", () => {
  render(<StarshipCard starship={mockStarship} onBuy={mockOnBuy} />);

  const decreaseButton = screen.getByText("-");
  const increaseButton = screen.getByText("+");
  const quantityInput = screen.getByRole("spinbutton");

  // Initial quantity should be 1
  expect(quantityInput).toHaveValue(1);

  // Increase quantity
  fireEvent.click(increaseButton);
  expect(quantityInput).toHaveValue(2);

  // Decrease quantity
  fireEvent.click(decreaseButton);
  expect(quantityInput).toHaveValue(1);
});

test("triggers onBuy when buy button is clicked", () => {
  render(<StarshipCard starship={mockStarship} onBuy={mockOnBuy} />);

  const buyButton = screen.getByText("BUY");
  fireEvent.click(buyButton);

  expect(mockOnBuy).toHaveBeenCalledWith(mockStarship.name, 1); // 1 is the default quantity
});
