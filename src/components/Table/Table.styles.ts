import styled, { css } from "styled-components";

const TABLE_BORDER_COLOR = "rgba(0, 0, 0, 0.12)";

export const TableHead = styled.thead``;
export const TableBody = styled.tbody``;
export const TableRow = styled.tr``;

const cellStyles = css`
  height: 56px;
  padding: 0 1rem;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid ${TABLE_BORDER_COLOR};
`;

export const TableHeadCell = styled.th`
  font-weight: 600;
  ${cellStyles}
`;

export const TableBodyCell = styled.td`
  ${cellStyles}
`;

export const Table = styled.table`
  width: 100%;
  min-width: 370px;
  border: 1px solid ${TABLE_BORDER_COLOR};
  border-radius: 0.25rem;
  border-spacing: unset;
  font-size: 0.875rem;
  text-align: left;

  ${TableRow}:last-of-type {
    ${TableBodyCell} {
      border: none;
    }
  }
`;
