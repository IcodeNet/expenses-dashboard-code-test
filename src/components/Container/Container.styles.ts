import styled from "styled-components";
import { getGridBreakpointMin } from "../../styles";

export const Container = styled.div`
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;

  @media screen and (${getGridBreakpointMin("sm")}) {
    padding: 0 2rem;
  }
`;