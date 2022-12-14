import React, { type ChangeEvent, type FC, memo } from 'react';
import { RESULTS_SELECT_CONTENT } from "./data";
import { ResultSelectWrapper, Select } from './ResultsSelect.styles';
import { type CSSProperties } from 'styled-components';

interface ResultsSelectProps {
  ml?: CSSProperties["marginLeft"];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  selectedValue: number;
}

const { 
  name: resultsName,
  label: resultsLabel,
  options: resultsOptions,
} = RESULTS_SELECT_CONTENT;

export const ResultsSelect: FC<ResultsSelectProps> = memo(({ ml, onChange, selectedValue }) => (
  <ResultSelectWrapper ml={ml}>
    <label htmlFor={resultsName}>{resultsLabel}</label>
    <Select 
      id={resultsName}
      name={resultsName}
      onChange={onChange}
      value={selectedValue}>
      {resultsOptions.map(
        ({ value, label }) => (<option key={value} value={label}>{label}</option>))}
    </Select>
  </ResultSelectWrapper>
));