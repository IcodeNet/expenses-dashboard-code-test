import styled, { type CSSProperties } from "styled-components";

interface SkeletonProps {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  margin?: CSSProperties["margin"];
}

export const DEFAULT_SKELETON_WIDTH = "100%";
export const DEFAULT_SKELETON_HEIGHT = "1rem";

export const SkeletonRectangle = styled.div<SkeletonProps>`
  position: relative;
  width: ${({ width }) => width || DEFAULT_SKELETON_WIDTH};
  height: ${({ height }) => height|| DEFAULT_SKELETON_HEIGHT};
  ${({ margin }) => margin && `margin: ${margin};`}
  background-color: rgba(0, 0, 0, 0.10);
  animation: flash 1.5s ease-in-out 0.4s infinite;
  border-radius: 0.25rem;

  @keyframes flash {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0.6;
    }

    100% {
      opacity: 1;
    }
  }
`;