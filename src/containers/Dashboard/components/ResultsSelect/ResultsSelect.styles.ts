import styled from "styled-components";
import { COLORS } from "../../../../styles";

const { grey, white } = COLORS;

export const ResultSelectWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Select = styled.select`
  display: inline-block;
  padding: 0.5rem 1rem 0.5rem 1rem;
  margin: 0;
  border-width: 1px;
  border-style: solid;
  border-color: ${grey.light};
  border-radius: 0.25rem;
  background-color: ${white};

  :focus, :hover {
    border-color: ${grey.dark};
  }
`;