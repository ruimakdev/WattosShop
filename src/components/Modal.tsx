import styled from "styled-components";
import { Modal as CarbonModal } from "@carbon/react";

interface ModalProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}

const StyledModal = styled(CarbonModal)`
  .cds--modal-container {
    border-radius: 12px;
    padding: 20px;
    background: var(--color-modal-background);
    box-shadow: 0 4px 8px var(--color-modal-shadow);
    color: var(--color-modal-text);
  }

  .cds--modal-heading {
    font-weight: bold;
    color: var(--color-modal-heading);
    margin-bottom: 12px;
  }

  .cds--btn--primary {
    background-color: var(--color-modal-button);
    color: var(--color-modal-button-text);
    &:hover {
      background-color: var(--color-modal-button-hover);
    }
  }
`;

const Modal: React.FC<ModalProps> = ({ isOpen, message, onClose }) =>
  !isOpen ? null : (
    <StyledModal
      open={isOpen}
      modalHeading="Purchase Successful"
      primaryButtonText="OK"
      onRequestClose={onClose}
      onRequestSubmit={onClose}
      size="sm"
      aria-label="Purchase confirmation dialog"
    >
      <p>{message}</p>
    </StyledModal>
  );

export default Modal;
