import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Home from "../pages/Home";
import { useStarships } from "../hooks/useStarships";

jest.mock("../hooks/useStarships", () => ({
  useStarships: jest.fn(),
}));

test("renders loading message when isLoading is true", () => {
  (useStarships as jest.Mock).mockReturnValue({
    data: null,
    isLoading: true,
    error: null,
  });

  render(<Home />);

  expect(screen.getByText("Loading starships...")).toBeInTheDocument();
});

test("renders starship cards when data is available", () => {
  (useStarships as jest.Mock).mockReturnValue({
    data: {
      results: [
        {
          name: "Millennium Falcon",
          model: "YT-1300 light freighter",
          manufacturer: "Corellian Engineering Corporation",
          cost_in_credits: "1000000",
        },
      ],
      count: 1,
    },
    isLoading: false,
    error: null,
  });

  render(<Home />);

  expect(screen.getByText("Millennium Falcon")).toBeInTheDocument();
  expect(screen.getByText("1000000 credits")).toBeInTheDocument();
});

test("displays modal after clicking buy button", () => {
  (useStarships as jest.Mock).mockReturnValue({
    data: {
      results: [
        {
          name: "Millennium Falcon",
          model: "YT-1300 light freighter",
          manufacturer: "Corellian Engineering Corporation",
          cost_in_credits: "1000000",
        },
      ],
      count: 1,
    },
    isLoading: false,
    error: null,
  });

  render(<Home />);

  const buyButton = screen.getByText("BUY");
  fireEvent.click(buyButton);

  expect(screen.getByText("You bought 1 x Millennium Falcon!")).toBeInTheDocument();
});
