import React, { ChangeEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { fetchProvider } from '../../api/fetchProvider';
import { DEFAULT_FILTER_COUNT } from './constants';
import { filterExpenses } from './helpers';
import { TransactionsTable } from './components';
import type { ProviderDataResponse } from '../../api/types/transactions';
import { TableWrapper } from './Dashboard.styles';
import { Alert, Container } from '../../components';
import { ProviderCards, ResultsSelect } from './components';

const EXPENSES_HEADING_ID = "expenses-heading";

export const Dashboard = () => {
  const [providerData, setProviderData] = useState<ProviderDataResponse | null>(null);
  const [filterCount, setFilterCount] = useState(DEFAULT_FILTER_COUNT);
  const isAwaitingProvider = useRef(true);
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { balance, provider, transactions } = providerData || {};

  useEffect(() => {
    fetchProvider({
      isAwaitingFetch: isAwaitingProvider,
      setProviderData,
      setIsLoading,
      setError
    });
  }, []);

  const isLoadingProvider = isLoading || isAwaitingProvider.current;

  const filteredTransactions = useMemo(
    () => filterExpenses(transactions || [], filterCount), [transactions, filterCount]
  );

  const handleResultsCount = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    setFilterCount(parseInt(value));
  }, []);

  return (
    <Container>
      <h1>My {providerData?.provider.title} Account</h1>

      <ProviderCards {...{
        balance,
        isLoading: isLoadingProvider,
        provider
      }} />

      {
        error ? 
          <Alert>{error}</Alert> 
          :
          <TableWrapper aria-labelledby={EXPENSES_HEADING_ID}>
            <h2 id={EXPENSES_HEADING_ID}>Expenses</h2>

            <TransactionsTable {...{
              labelledBy: EXPENSES_HEADING_ID,
              isLoading: isLoadingProvider,
              transactions: filteredTransactions
            }} />

            <ResultsSelect onChange={handleResultsCount} selectedValue={filterCount} />
          </TableWrapper>
      }
    </Container>
  );
}