import styled from "styled-components";
import { COLORS } from "../../../../styles";

export const TableOverflow = styled.div.attrs(() => ({
  tabIndex: 0
}))`
  width: 100%;
  overflow: auto;

  :focus {
    outline: 3px solid ${COLORS.grey.dark};
  }
  
  :focus:not(:focus-visible) {
    outline: none;
  }
`;