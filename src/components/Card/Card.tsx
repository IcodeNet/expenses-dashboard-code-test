import { FC, ReactElement } from "react";
import { CardIcon, CardWrapper } from "./Card.styles";

interface CardProps {
  children: ReactElement[] | ReactElement;
  icon?: string;
  testId?: string;
}

export const Card: FC<CardProps> = ({ children, icon, testId }) => (
  <CardWrapper flex data-testid={testId}>
    {icon && (
      <div>
        <CardIcon src={icon} alt=""/>
      </div>
    )}

    <div>
      {children}
    </div>
  </CardWrapper>
);