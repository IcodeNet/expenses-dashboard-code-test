import styled, { css } from "styled-components";

export const Table = styled.table`
  width: 100%;
  min-width: 370px;
  border: 1px solid #fafafa;
  border-radius: 0.25rem;
  text-align: left;
`;

export const TableHead = styled.thead``;
export const TableBody = styled.tbody``;
export const TableRow = styled.tr``;

const cellStyles = css`
  padding: 0.25rem;
`;

export const TableHeadCell = styled.th`
  ${cellStyles}
`;

export const TableBodyCell = styled.td`
  ${cellStyles}
`;