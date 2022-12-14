import styled, { type CSSProperties } from "styled-components";
import { COLORS } from "../../styles";

interface CardWrapperProps {
  flex?: boolean;
  flexDirection?: CSSProperties["flexDirection"];
}

export const CardWrapper = styled.div<CardWrapperProps>`
  ${({ flex }) => flex && `
    display: flex;
    gap: 0.75rem;
  `}
  ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection};`}
  padding: 1rem;
  border-width: 1px;
  border-style: solid;
  border-color: ${COLORS.grey.mid};
  border-radius: 0.25rem;
  background-color: ${COLORS.white};
`;

interface CardContentSkeletonWrapperProps {
  flexDirection?: CSSProperties["flexDirection"]
}

export const CardContentSkeletonWrapper = styled.div<CardContentSkeletonWrapperProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || "column"};
  gap: 0.75rem;
`;

export const CardHeading = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 2rem;
  margin: 0;
`;

export const CardSubheading = styled.h3`
  font-size: 0.875rem;
  font-weight: normal;
  margin: 0;
`;

export const CardIcon = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 0.25rem;
  object-fit: contain;
`;