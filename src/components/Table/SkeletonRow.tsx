import React from 'react'
import { SkeletonRectangle } from '../../components/Skeleton/Skeleton.styles';
import { TableBodyCell, TableRow } from './Table.styles'

interface SkeletonRowProps {
  columns: number;
}

export const SkeletonRow = ({ columns }: SkeletonRowProps) => {
  return (
    <TableRow>
      {
        [...Array(columns)].map((_, index) => (
          <TableBodyCell key={index}>
            <SkeletonRectangle />
          </TableBodyCell>
        ))
      }
    </TableRow>
  )
}