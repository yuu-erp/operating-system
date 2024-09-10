import FavoriteMobile from "@/components/partials/FavoriteMobile";
import useLayoutMobile from "@/hooks/useLayoutMobile";
import React, { useContext } from "react";
import MainGrid from "../features/mobile/MainGrid";
import SearchField from "../features/mobile/SearchField";
import StatusBar from "../features/mobile/StatusBar";
import { PADDING_DAPP_MOBILE } from "@/constants";
import { SettingContext } from "@/contexts/SettingContext";
import SlidePage from "../features/mobile/SlidePage";
const MobileLayout = () => {
  const { isEdit } = useContext(SettingContext)
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
        <div className="flex-1 flex flex-col" style={{
            paddingLeft: `${PADDING_DAPP_MOBILE}px`,
            paddingRight: `${PADDING_DAPP_MOBILE}px`,
          }}>
          <StatusBar isEdit={isEdit} />
          <MainGrid ref={refMainGrid} gridLayouts={gridLayouts} settingLayout={settingLayout} isEdit={isEdit} />
          {/* <SlidePage /> */}
        </div>
        <SearchField />
        <FavoriteMobile />
      </div>
    </React.Fragment>
  );
};

export default MobileLayout;
