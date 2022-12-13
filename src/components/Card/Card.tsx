import { FC, ReactElement } from "react";
import { CardIcon, CardIconWrapper, CardWrapper, CardContent } from "./Card.styles";

interface CardProps {
  children: ReactElement[] | ReactElement;
  icon?: string;
  testId?: string;
}

export const Card: FC<CardProps> = ({ children, icon, testId }) => (
  <CardWrapper flex data-testid={testId}>
    {icon && (
      <CardIconWrapper>
        <CardIcon src={icon} alt=""/>
      </CardIconWrapper>
    )}
    <CardContent>
      {children}
    </CardContent>
  </CardWrapper>
);