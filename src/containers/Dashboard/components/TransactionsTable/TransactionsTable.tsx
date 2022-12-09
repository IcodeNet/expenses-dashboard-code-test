import type { Transaction } from '../../../../api/types/transactions';
import React, { type FC } from 'react'
import { 
  Table, 
  TableBody, 
  TableBodyCell, 
  TableHead, 
  TableHeadCell, 
  TableRow,
  SkeletonRow
} from '../../../../components';
import { CURRENCY_SYMBOL } from '../../../../api/types/transactions';

interface TransactionsTableProps {
  isLoading?: boolean;
  skeletonRows?: number;
  transactions: Transaction[];
}

export const TransactionsTable: FC<TransactionsTableProps> = ({
  isLoading,
  skeletonRows = 3,
  transactions,
}) => {
  return (
    transactions ? <Table>
      <TableHead>
        <TableRow>
            <TableHeadCell>Date</TableHeadCell>
            <TableHeadCell>Description</TableHeadCell>
            <TableHeadCell>Amount</TableHeadCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {isLoading && (
          [...Array(skeletonRows)].map((_, index) => <SkeletonRow key={index} columns={3} />)
        )}
        
        {!isLoading && transactions.map((transaction) => {
          const {id, amount, date, description} = transaction;
          const {value, currency_iso} = amount;
          const formattedDate = new Date(date).toLocaleDateString("en-GB");

          return (
          <TableRow key={id}>
            <TableBodyCell>{formattedDate}</TableBodyCell>
            <TableBodyCell>{description}</TableBodyCell>
            <TableBodyCell>{CURRENCY_SYMBOL[currency_iso]} {Math.abs(value).toString()}</TableBodyCell>
          </TableRow>
          )
        })}
      </TableBody>
    </Table>
    : null
  );
}