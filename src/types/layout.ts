export type GridDimensions = {
  numberColumn: number;
  numberRow: number;
};

export type ILayout = GridDimensions & {
  itemWidth: number;
  itemHeight: number;
};

export interface IGridItem {
  x: number;
  y: number;
}
