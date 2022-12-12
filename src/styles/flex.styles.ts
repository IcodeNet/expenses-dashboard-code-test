import styled, { CSSProperties } from "styled-components";

interface FlexContainerProps {
  direction?: CSSProperties["flexDirection"];
  gap?: CSSProperties["gap"];
  wrap?: CSSProperties["flexWrap"];
}

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  ${({ direction }) => direction && `flex-direction: ${direction};`}
  ${({ gap }) => gap && `gap: ${gap};`}
  ${({ wrap }) => wrap && `flex-wrap: ${wrap};`}
`;