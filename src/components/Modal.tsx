import styled from "styled-components";
import { Modal as CarbonModal } from "@carbon/react";

interface ModalProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}

const StyledModal = styled(CarbonModal)`
  .cds--modal-container {
    position: fixed;
    padding: 1rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    transition: transform 240ms cubic-bezier(0, 0, 0.3, 1);
    max-width: 400px;
    width: 90%;
    max-height: 40vh;
    overflow-y: auto;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    @media (max-width: 768px) {
      border-radius: 8px;
      padding: 16px;
    }
  }

  .cds--modal-heading {
    font-weight: bold;
    color: var(--color-modal-heading);
    margin-bottom: 12px;
  }

  .cds--btn--primary {
    background-color: var(--color-modal-button);
    color: var(--color-modal-button-text);
    padding: 0;
    margin: 0 auto;
    justify-content: center;
    height:100%;
    padding-block: 0 !important;
    align-items: center;


    &:hover {
      background-color: var(--color-modal-button-hover);
    }
  }

  .cds--modal-close {
  background: unset;
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
