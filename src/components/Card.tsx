import styled from "styled-components";
import { useState } from "react";
import { Button, NumberInput } from "@carbon/react";
import { Starship } from "../types";

interface StarshipCardProps {
  starship: Starship;
  onBuy: (name: string, quantity: number) => void;
}

const Card = styled.div`
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 16px;
  background: var(--color-background-light);
  margin: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
  background: var(--color-title-background);
  border-radius: 15px;
  font-family: fantasy;
  padding: 8px;
`;

const CardHeader = styled.div`
  margin-bottom: 16px;
`;

const CardBody = styled.div`
  flex-grow: 1;
`;

const Price = styled.p`
  font-weight: bold;
  font-size: 1.1em;
  margin: 8px 0;
  color: var(--color-text-primary);
`;

const Info = styled.p`
  font-size: 0.9em;
  color: var(--color-text-secondary);
`;

const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;

const NumberInputWrapper = styled.div`
  width: 100%;
  max-width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .cds--number__input-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const StyledNumberInput = styled(NumberInput)`
  text-align: center;
  background: var(--color-input-background);
  border-radius: 12px;

  & input {
    text-align: center;
    padding: 0px !important;
    margin: 0 auto;
    font-size: 1.2em !important;
  }
`;

const BuyButton = styled(Button)`
  background-color: var(--color-button-primary);
  color: var(--color-button-text);
  border-radius: 12px;
  font-family: "Star Jedi", sans-serif;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  font-weight: bold;

  &:hover {
    background-color: var(--color-button-primary-hover);
  }

  &:focus {
    outline: 2px solid var(--color-focus);
    outline-offset: 4px;
  }
`;

const ActionButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.5em;
  color: var(--color-text-primary);
  cursor: pointer;

  &:hover {
    color: var(--color-highlight);
  }

  &:focus {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }

  &:disabled {
    color: var(--color-disabled);
    cursor: not-allowed;
  }
`;

export const StarshipCard: React.FC<StarshipCardProps> = ({
  starship,
  onBuy,
}) => {
  const [quantity, setQuantity] = useState<number>(1);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <Card>
      <CardHeader>
        <Title>{starship.name}</Title>
        <Info>Model: {starship.model}</Info>
        <Info>Manufacturer: {starship.manufacturer}</Info>
      </CardHeader>

      <CardBody>
        <Price aria-label={`${starship.cost_in_credits} credits`}>
          {starship.cost_in_credits} credits
        </Price>
      </CardBody>

      <ActionWrapper>
        <NumberInputWrapper>
          <ActionButton
            onClick={decreaseQuantity}
            aria-label={`Decrease quantity. Current quantity is ${quantity}`}
            disabled={quantity === 1}
          >
            -
          </ActionButton>
          <StyledNumberInput
            id={`quantity-${starship.name}`}
            value={quantity}
            min={1}
            hideSteppers
            label="Quantity"
            readOnly
            aria-label={`Quantity of ${starship.name}, current value is ${quantity}`}
          />
          <ActionButton
            onClick={increaseQuantity}
            aria-label={`Increase quantity. Current quantity is ${quantity}`}
          >
            +
          </ActionButton>
        </NumberInputWrapper>

        <BuyButton
          onClick={() => onBuy(starship.name, quantity)}
          aria-label={`Buy ${quantity} unit(s) of ${starship.name}`}
        >
          BUY
        </BuyButton>
      </ActionWrapper>
    </Card>
  );
};
