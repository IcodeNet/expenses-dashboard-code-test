import React, { FC } from 'react'
import { AlertContentWrapper, AlertIcon, AlertIconWrapper, AlertWrapper } from './Alert.styles';
import alert from "../../static/alert.png";
import { EXCLAMATION_ALT } from './constants';

interface AlertProps {
  children: string,
  type?: "error"
}

export const Alert: FC<AlertProps> = ({ children, type = "error" }) => (
  <AlertWrapper {...{ role: "alert", type }}>
    <AlertIconWrapper>
      <AlertIcon src={alert} alt={EXCLAMATION_ALT}/>
    </AlertIconWrapper>
    <AlertContentWrapper>
      {children}
    </AlertContentWrapper>
  </AlertWrapper>
);