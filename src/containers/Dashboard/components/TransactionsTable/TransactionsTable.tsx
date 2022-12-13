import type { CurrencyCodeIso, Transaction } from '../../../../api/types/transactions';
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
import { TableOverflow } from './TransactionsTable.styles';
import { formatCurrency } from '../../../../utilities';
import { EXPENSES_TABLE_CONTENT } from './constants';

interface TransactionsTableProps {
  isLoading?: boolean;
  labelledBy: string;
  skeletonRows?: number;
  transactions: Transaction[];
}

const smallHeadCellProps = {
  width: "120px"
}

const { headings: {
  date: dateHeading,
  description: descriptionHeading,
  amount: amountHeading
} } = EXPENSES_TABLE_CONTENT;

export const TransactionsTable: FC<TransactionsTableProps> = ({
  isLoading,
  labelledBy,
  skeletonRows = 3,
  transactions,
}) => (
  transactions ?
    <TableOverflow>
      <Table aria-labelledby={labelledBy}>
        <TableHead>
          <TableRow>
              <TableHeadCell {...{smallHeadCellProps}}>{dateHeading}</TableHeadCell>
              <TableHeadCell>{descriptionHeading}</TableHeadCell>
              <TableHeadCell {...{smallHeadCellProps}}>{amountHeading}</TableHeadCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {isLoading && (
            [...Array(skeletonRows)].map((_, index) => 
              <SkeletonRow key={index} columns={3} />)
          )}
          
          {!isLoading && transactions.map((transaction) => {
            const {id, amount, date, description} = transaction;
            const {value, currency_iso} = amount;
            const formattedDate = new Date(date).toLocaleDateString("en-GB");

            return (
            <TableRow key={id}>
              <TableBodyCell>{formattedDate}</TableBodyCell>
              <TableBodyCell>{description}</TableBodyCell>
              <TableBodyCell>{formatCurrency(value, currency_iso, true)}</TableBodyCell>
            </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableOverflow>
  : null
);