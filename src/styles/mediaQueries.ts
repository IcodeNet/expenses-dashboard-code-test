const OGridBreakpoint = {
  SM: "sm"
} as const;

export type GridBreakpoint =
  typeof OGridBreakpoint[keyof typeof OGridBreakpoint];

export const GRID_SIZES: Record<GridBreakpoint, number> = {
  sm: 576
};

export const getGridBreakpointMin = (breakpoint: GridBreakpoint) =>
  `min-width: ${GRID_SIZES[breakpoint]}px`;