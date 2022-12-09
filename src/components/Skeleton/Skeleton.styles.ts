import styled from "styled-components";

interface SkeletonProps {
  width?: string;
  height?: string;
}

export const DEFAULT_SKELETON_WIDTH = "100%";
export const DEFAULT_SKELETON_HEIGHT = "1rem";

export const SkeletonRectangle = styled.div<SkeletonProps>`
  position: relative;
  width: ${({ width }) => width || DEFAULT_SKELETON_WIDTH};
  height: ${({ width }) => width || DEFAULT_SKELETON_HEIGHT};
  background: rgba(0, 0, 0, 0.11);
  animation: pulse 1.5s ease-in-out 0.4s infinite;
  border-radius: 0.25rem;

  @keyframes flash {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0.5;
    }

    100% {
      opacity: 1;
    }
  }
`;