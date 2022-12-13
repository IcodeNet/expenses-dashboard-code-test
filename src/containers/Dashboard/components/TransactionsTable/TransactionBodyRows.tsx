import { FC } from "react";
import { Transaction } from "../../../../api/types";
import { TableRow, TableBodyCell } from "../../../../components";
import { formatCurrency } from "../../../../utilities";

interface TransactionBodyRow {
  transactions: Transaction[]
}

export const TransactionBodyRows: FC<TransactionBodyRow> = ({ transactions }) => (
  <>
    {transactions.map((transaction) => {
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
  </>
);