import FavoriteMobile from "@/components/partials/FavoriteMobile";
import useLayoutMobile from "@/hooks/useLayoutMobile";
import React from "react";
import MainGrid from "../features/mobile/MainGrid";
import SearchField from "../features/mobile/SearchField";
import StatusBar from "../features/mobile/StatusBar";
import { PADDING_DAPP_MOBILE } from "@/constants";
const MobileLayout = () => {
  const { refMainGrid, settingLayout, gridLayouts } = useLayoutMobile();
  console.log("settingLayout: ", settingLayout)
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
        <div className="flex-1 flex flex-col" style={{
            paddingLeft: `${PADDING_DAPP_MOBILE}px`,
            paddingRight: `${PADDING_DAPP_MOBILE}px`,
          }}>
          <StatusBar />
          <MainGrid ref={refMainGrid} gridLayouts={gridLayouts} settingLayout={settingLayout} />
        </div>
        <SearchField />
        <FavoriteMobile />
      </div>
    </React.Fragment>
  );
};

export default MobileLayout;
