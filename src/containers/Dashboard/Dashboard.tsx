import React, { useEffect, useMemo, useState } from 'react'
import { fetchProvider } from '../../api/fetchProvider';
import { DEFAULT_FILTER_COUNT } from './constants';
import { filterExpenses } from './helpers';
import { TransactionsTable } from './components/TransactionsTable';
import type { ProviderDataResponse } from '../../api/types/transactions';

export const Dashboard = () => {
  const [providerData, setProviderData] = useState<ProviderDataResponse | null>(null);
  const [filterCount, setFilterCount] = useState(DEFAULT_FILTER_COUNT);
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { transactions } = providerData || {};

  useEffect(() => {
    fetchProvider({
      setProviderData,
      setIsLoading,
      setError
    });
  }, []);

  const filteredTransactions = useMemo(
    () => filterExpenses(transactions || [], filterCount), [transactions, filterCount]
  );

  if (isLoading) return <div>Your transactions are loading</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <h1>My Account</h1>

      <h2>Expenses</h2>
      <TransactionsTable transactions={filteredTransactions} />
    </>
  );
}