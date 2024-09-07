import { IGridItem, ILayout } from '@/types/layout';
import React from 'react';

interface Props {
  gridLayouts: IGridItem[];
  settingLayout: ILayout;
}

const MainGrid = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { gridLayouts, settingLayout } = props;
  const { itemHeight, itemWidth, numberColumn } = settingLayout;

  console.log("MOBILE_LAYOUT_SETTING_LAYOUT: ", { itemHeight, itemWidth, numberColumn });
  console.log("MOBILE_LAYOUT_GRID_LAYOUT: ", gridLayouts);

  return (
    <React.Fragment>
      <div ref={ref} className='relative flex-1'>
        {gridLayouts.map((grid, index) => (
          <div
            key={index}
            style={{
              width: `${itemWidth}px`,
              height: `${itemHeight}px`,
              position: 'absolute',
              left: `${grid.x * itemWidth}px`,
              top: `${grid.y * itemHeight}px`,
            }}
            className="rounded-2xl text-white"
          >
            <div className='w-full h-full px-[15px]'>
              <div className='w-full aspect-square bg-slate-700 rounded-2xl'></div>
              <div className='w-full line-clamp-1 text-center text-xs'><span>Dapp {index}</span></div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
});

MainGrid.displayName = "MainGrid";
export default React.memo(MainGrid);
