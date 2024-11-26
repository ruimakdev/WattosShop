import { useState } from "react";
import { FlexGrid, Row, Column } from "@carbon/react";
import { useStarships } from "../hooks/useStarships";
import { Error } from "../components/Error";
import { Starship } from "../types";
import { StarshipCard } from "../components/Card";
import { Pagination } from "../components/Pagination";

import styled from "styled-components";
import Modal from "../components/Modal";

const GridContainer = styled.div`
  display: block;
`;

const Home = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data, isLoading, error } = useStarships(currentPage);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleBuy = (name: string, quantity: number) => {
    setModalMessage(`You bought ${quantity} x ${name}!`);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{ width: "100%", padding: "0 20px" }}>
      <section style={{ marginTop: "80px" }}>

        {isLoading && (
          <div aria-live="polite" role="status">
            Loading starships...
          </div>
        )}

        {error && <Error error={error} />}

        {data && (
          <GridContainer>
            <FlexGrid fullWidth>
              <Row
                style={{ display: "flex", flexWrap: "wrap", gap: "20px 0px" }}
              >
                {data.results.map((ship: Starship) => (
                  <Column key={ship.name} sm={16} md={8} lg={8}>
                    <StarshipCard starship={ship} onBuy={handleBuy} />
                  </Column>
                ))}
              </Row>
            </FlexGrid>

            <Pagination
              totalItems={data.count || 0} 
              currentPage={currentPage}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </GridContainer>
        )}

        <Modal
          isOpen={isModalOpen}
          message={modalMessage}
          onClose={closeModal}
        />
      </section>
    </div>
  );
};

export default Home;
