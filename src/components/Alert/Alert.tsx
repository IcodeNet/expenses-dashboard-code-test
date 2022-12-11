import React, { FC } from 'react'
import { AlertContentWrapper, AlertIcon, AlertIconWrapper, AlertWrapper } from './Alert.styles';
import alert from "../../static/alert.png";

interface AlertProps {
  children: string,
  type?: "error"
}

export const Alert: FC<AlertProps> = ({ children, type = "error" }) => (
  <AlertWrapper {...{ role: "alert", type }}>
    <AlertIconWrapper>
      <AlertIcon src={alert} alt="Exclamation mark" />
    </AlertIconWrapper>
    <AlertContentWrapper>
      {children}
    </AlertContentWrapper>
  </AlertWrapper>
);