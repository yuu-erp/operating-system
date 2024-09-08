export type GridDimensions = {
  numberColumn: number
  numberRow: number
};

export type ItemDappSize = {
  itemWidth: number
  itemHeight: number
}

export type ILayout = GridDimensions & ItemDappSize

export interface IGridItem {
  x: number
  y: number
}
