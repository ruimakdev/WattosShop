import { Pagination as CustomPagination } from "@carbon/react";
import styled from "styled-components";

interface PaginationProps {
  totalItems: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const StyledPagination = styled(CustomPagination)`
margin-top: 20px;
`

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  onPageChange,
  totalItems,
}) => {
  return (
    <StyledPagination
      backwardText="Previous page"
      forwardText="Next page"
      onChange={({ page }) => {
        onPageChange(page);
      }}
      page={currentPage}
      pageSize={10}
      pageSizes={[10]}
      size="md"
      totalItems={totalItems}
    />
  );
};
