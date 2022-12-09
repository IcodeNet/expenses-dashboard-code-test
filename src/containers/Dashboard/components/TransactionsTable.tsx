import type { Transaction } from '../../../api/types/transactions';
import React, { type FC } from 'react'
import { 
  Table, 
  TableBody, 
  TableBodyCell, 
  TableHead, 
  TableHeadCell, 
  TableRow 
} from '../../../components/Table/Table.styles';
import { SkeletonRow } from '../../../components/Table/SkeletonRow';

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

          return (
          <TableRow key={id}>
            <TableBodyCell>{date}</TableBodyCell>
            <TableBodyCell>{description}</TableBodyCell>
            <TableBodyCell>{value.toString()} {currency_iso}</TableBodyCell>
          </TableRow>
          )
        })}
      </TableBody>
    </Table>
    : null
  );
}