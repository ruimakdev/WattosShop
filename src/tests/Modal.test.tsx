import { render, screen, fireEvent } from '@testing-library/react';
import Modal from '../components/Modal';

test("renders modal content when open", () => {
  render(<Modal isOpen={true} onClose={jest.fn()} message="Purchase Successful" />);

  const modalMessage = screen.getByRole('heading', { name: /purchase successful/i });

  expect(modalMessage).toBeInTheDocument();
});

test('does not render modal content when closed', () => {
  render(<Modal isOpen={false} onClose={jest.fn()} message="Purchase Successful"  />);

  const modalMessages = screen.queryAllByText(/purchase successful/i);
  
  expect(modalMessages).toHaveLength(0);
});



test("calls onClose when close button is clicked", () => {
  const onClose = jest.fn();
  render(<Modal isOpen={true} onClose={onClose} message="Purchase Successful" />);

  fireEvent.click(screen.getByLabelText("Close"));

  expect(onClose).toHaveBeenCalledTimes(1);
});
