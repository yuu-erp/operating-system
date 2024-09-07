import { IGridItem, ILayout } from "@/types/layout";
import { calculateGrids } from "@/utils/handleLayout";
import { useEffect, useRef, useState } from "react"

const aspectRatio = 1.10
export default function useLayoutMobile() {
  const refMainGrid = useRef<HTMLDivElement>(null);
  const [settingLayout, setSettingLayout] = useState<ILayout>({
    numberColumn: 4,
    numberRow: 0,
    itemWidth: 0,
    itemHeight: 0
  })
  const [gridLayouts, setGridLayouts] = useState<IGridItem[]>([]);

  useEffect(() => {
    if (refMainGrid.current) {
      const { numberColumn } = settingLayout
      const mainGridWidth = refMainGrid.current.offsetWidth;
      const mainGridHeight = refMainGrid.current.offsetHeight;
      const itemWidth = mainGridWidth / numberColumn;
      const itemHeight = itemWidth * aspectRatio;
      const numberRow = Math.floor(mainGridHeight / itemHeight);
      const newGridLayouts = calculateGrids({ numberColumn, numberRow })
      setGridLayouts(newGridLayouts)
      setSettingLayout({
        itemWidth,
        itemHeight,
        numberRow,
        numberColumn
      })
    }
  }, []);

  return {
    refMainGrid,
    settingLayout,
    gridLayouts
  }
}
