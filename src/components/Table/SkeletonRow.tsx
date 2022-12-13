import React from 'react'
import { SkeletonRectangle } from '../../components/Skeleton/Skeleton.styles';
import { LOADING_LABEL } from './constants';
import { TableBodyCell, TableRow } from './Table.styles'

interface SkeletonRowProps {
  columns: number;
}

export const SkeletonRow = ({ columns }: SkeletonRowProps) => (
  <TableRow>
    {
      [...Array(columns)].map((_, index) => (
        <TableBodyCell key={index}>
          <SkeletonRectangle aria-label={LOADING_LABEL} data-testid="skeleton-loader" />
        </TableBodyCell>
      ))
    }
  </TableRow>
)
