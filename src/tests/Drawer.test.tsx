import { render, screen, fireEvent } from "@testing-library/react";
import Drawer from "../components/Drawer";

test("renders Drawer when isOpen is true", () => {
  render(<Drawer isOpen={true} closeDrawer={jest.fn()} />);

  const drawer = screen.getByLabelText("Navigation drawer");
  expect(drawer).toBeInTheDocument();
});

test("closes Drawer when backdrop is clicked", () => {
  const closeDrawer = jest.fn();
  render(<Drawer isOpen={true} closeDrawer={closeDrawer} />);

  const backdrop = screen.getByLabelText("Close navigation menu");
  fireEvent.click(backdrop);

  expect(closeDrawer).toHaveBeenCalled();
});
