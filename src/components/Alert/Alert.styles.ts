import styled from "styled-components";
import { COLORS } from "../../styles";

const ALERT_STYLES = {
  "error": {
    borderColor: COLORS.red.light,
    color: COLORS.red.dark
  }
}

interface AlertWrapperProps {
  type: "error",
};

export const AlertWrapper = styled.div<AlertWrapperProps>`
  display: flex;
  gap: 0.25rem;
  padding: 0.75rem;
  border-radius: 0.25rem;
  background-color: ${({ type }) => ALERT_STYLES[type].borderColor};
  color: ${({ type }) => ALERT_STYLES[type].color};
`;

export const AlertIconWrapper = styled.div``;

export const AlertIcon = styled.img`
  width: 36px;
  height: 36px;
`;

export const AlertContentWrapper = styled.div`
  padding: 0.375rem;
`;