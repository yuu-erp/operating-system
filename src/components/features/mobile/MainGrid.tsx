import Dapp from "@/components/shared/Dapp";
import useDragAndDrop from "@/hooks/useDragAndDrop";
import { IGridItem, ILayout } from "@/types/layout";
import React from "react";

interface Props {
  gridLayouts: IGridItem[];
  settingLayout: ILayout;
}

const MainGrid = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { gridLayouts, settingLayout } = props;
  const { itemHeight, itemWidth, numberColumn } = settingLayout;

  const {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    dapps
  } = useDragAndDrop(gridLayouts, itemWidth, itemHeight, numberColumn);

  return (
    <div
      ref={ref}
      className="relative flex-1"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {gridLayouts.map((grid, index) => (
        <div
          key={index}
          style={{
            width: `${itemWidth}px`,
            height: `${itemHeight}px`,
            position: "absolute",
            left: `${grid.x * itemWidth}px`,
            top: `${grid.y * itemHeight}px`,
          }}
          className="rounded-2xl text-white"
        ></div>
      ))}
      {dapps.map((dapp: IDapp, index: number) => (
        <Dapp
          key={index}
          onTouchStart={(event) => handleTouchStart(index, event)}
          onMouseDown={(event) => handleMouseDown(index, event)}
          itemHeight={itemHeight}
          itemWidth={itemWidth}
          {...dapp}
        />
      ))}
    </div>
  );
});

MainGrid.displayName = "MainGrid";
export default React.memo(MainGrid);
