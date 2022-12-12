import React, { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react'
import { fetchProvider } from '../../api/fetchProvider';
import { DEFAULT_FILTER_COUNT } from './constants';
import { filterExpenses } from './helpers';
import { TransactionsTable } from './components';
import type { ProviderDataResponse } from '../../api/types/transactions';
import { TableWrapper } from './Dashboard.styles';
import { Alert, Container } from '../../components';
import { ProviderCards, ResultsSelect } from './components';

export const Dashboard = () => {
  const [providerData, setProviderData] = useState<ProviderDataResponse | null>(null);
  const [filterCount, setFilterCount] = useState(DEFAULT_FILTER_COUNT);
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { balance, provider, transactions } = providerData || {};

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

  const handleResultsCount = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    setFilterCount(parseInt(value));
  }, []);

  return (
    <Container>
      <h1>My {providerData?.provider.title} Account</h1>

      <ProviderCards {...{
        balance,
        isLoading,
        provider
      }} />

      {
        error ? 
          <Alert>{error}</Alert> 
          :
          <>
            <h2>Expenses</h2>

            <TableWrapper>
              <TransactionsTable {...{
                isLoading,
                transactions: filteredTransactions
              }} />

              <ResultsSelect onChange={handleResultsCount} selectedValue={filterCount} />
            </TableWrapper>
          </>
      }
    </Container>
  );
}