import React from "react";
import FavoriteMobile from "@/components/partials/FavoriteMobile";
import useLayoutMobile from "@/hooks/useLayoutMobile";
import MainGrid from "../features/mobile/MainGrid";
import { HEIGHT_STATUS_BAR_MOBILE } from "@/constants";
const MobileLayout = () => {
  const { refMainGrid, settingLayout, gridLayouts } = useLayoutMobile();
  return (
    <React.Fragment>
      <div
        className="w-screen h-screen relative flex flex-col"
        style={{
          backgroundImage: "url(/wallpaper.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex-1 flex flex-col px-5">
          <div className="w-full" style={{
            height: `${HEIGHT_STATUS_BAR_MOBILE}PX`
          }}>Status Bar</div>
          {/* lười các dapp */}
          <MainGrid ref={refMainGrid} gridLayouts={gridLayouts} settingLayout={settingLayout} />
        </div>
        <div className="h-[30px]">Search Field</div>
        {/* 4 dapp yêu thích - Favorites */}
        <FavoriteMobile />
      </div>
    </React.Fragment>
  );
};

export default MobileLayout;
