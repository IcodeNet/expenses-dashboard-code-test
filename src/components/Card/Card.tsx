import { FC, ReactElement } from "react";
import { CardIcon, CardIconWrapper, CardWrapper, CardContent } from "./Card.styles";

interface CardProps {
  children: ReactElement[]
  icon?: string;
}

export const Card: FC<CardProps> = ({ icon, children }) => {
  return (
    <CardWrapper flex>
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
};