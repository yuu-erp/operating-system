import { GridDimensions, IGridItem } from "@/types/layout";

export const calculateGrids = (gridDimensions: GridDimensions): IGridItem[] => {
  const { numberColumn, numberRow } = gridDimensions;
  return Array.from({ length: numberRow }, (_, y) =>
    Array.from({ length: numberColumn }, (_, x) => ({ x, y }))
  ).flat();
};
