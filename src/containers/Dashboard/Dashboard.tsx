// @ts-nocheck
import React, { useEffect, useMemo, useState } from 'react'
import { fetchTransactions } from '../../api/transactions';
import { DEFAULT_FILTER_COUNT } from './constants';
import { filterExpenses } from './helpers';

export const Dashboard = () => {
  const [transactions, setTransactions] = useState<null | {}>(null);
  const [filterCount, setFilterCount] = useState(DEFAULT_FILTER_COUNT);
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchTransactions({
      setTransactions,
      setIsLoading,
      setError
    });
  }, []);

  const filteredTransactions = useMemo(() => filterExpenses(transactions, filterCount), [transactions, filterCount]);

  console.log("Filtered transactions", filteredTransactions);

  if (isLoading) return <div>Your transactions are loading</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <h2>Dashboard list goes here</h2>

      {
        filteredTransactions ? <ul>
          {filteredTransactions.map((transaction) => {
            const {id, amount, date, description} = transaction;
            const {value, currency_iso} = amount;

            return (
              <li key={id}>
                <div>Transaction date is {date}</div>
                <div>Description is {description}</div>
                <div>Amount is {value.toString()} {currency_iso}</div>
              </li>
            )
          })}
        </ul> : null
      }
    </>
  );
}