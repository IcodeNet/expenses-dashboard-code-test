import React, { ChangeEvent, FC, memo } from 'react';
import { RESULTS_SELECT_CONTENT } from "./data";
import { ResultSelectWrapper, Select } from './ResultsSelect.styles';

interface ResultsSelectProps {
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    selectedValue: number;
}

const { 
  name: resultsName,
  label: resultsLabel,
  options: resultsOptions 
} = RESULTS_SELECT_CONTENT;

export const ResultsSelect: FC<ResultsSelectProps> = memo(({ onChange, selectedValue }) => (
  <ResultSelectWrapper>
    <label htmlFor={resultsName}>{resultsLabel}</label>
    <Select {...{ id: resultsName, name: resultsName, onChange, value: selectedValue }}>
      {resultsOptions.map(({ value, label }) => {
        const isSelected = value === selectedValue;
        return <option key={value} value={label}>{label}</option>;
      })}
    </Select>
  </ResultSelectWrapper>
));