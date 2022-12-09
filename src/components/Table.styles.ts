import styled, { css } from "styled-components";

export const Table = styled.table`
  width: 100%;
  min-width: 370px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 0.25rem;
  font-size: 0.875rem;
  text-align: left;
`;

export const TableHead = styled.thead``;
export const TableBody = styled.tbody``;
export const TableRow = styled.tr``;

const cellStyles = css`
  height: 56px;
  padding: 0 1rem;
`;

export const TableHeadCell = styled.th`
  ${cellStyles}
`;

export const TableBodyCell = styled.td`
  ${cellStyles}
`;