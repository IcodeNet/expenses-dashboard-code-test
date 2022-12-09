import React, { ChangeEvent, FC, memo } from 'react';
import { RESULTS_SELECT_CONTENT } from "./data";
import { ResultSelectWrapper, Select } from './ResultsSelect.styles';

interface ResultsSelectProps {
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const { 
  name: resultsName,
  label: resultsLabel,
  options: resultsOptions 
} = RESULTS_SELECT_CONTENT;

export const ResultsSelect: FC<ResultsSelectProps> = memo(({ onChange }) => (
  <ResultSelectWrapper>
    <label htmlFor={resultsName}>{resultsLabel}</label>
    <Select {...{ id: resultsName, name: resultsName, onChange }}>
      {resultsOptions.map(({ value, label }) => 
        <option key={value} value={label}>{label}</option>)}
    </Select>
  </ResultSelectWrapper>
));