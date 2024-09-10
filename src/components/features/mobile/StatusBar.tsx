import ButtonBase from "@/components/shared/ButtonBase";
import { HEIGHT_STATUS_BAR_MOBILE, PADDING_DAPP_MOBILE } from "@/constants";
import React from "react";
import { HiMenu } from "react-icons/hi";

interface Props {
  isEdit?: boolean;
}
const StatusBar = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { isEdit } = props;
  return (
    <React.Fragment>
      <div
        ref={ref}
        style={{
          height: `${HEIGHT_STATUS_BAR_MOBILE}px`,
          paddingLeft: `${PADDING_DAPP_MOBILE}px`,
          paddingRight: `${PADDING_DAPP_MOBILE}px`,
        }}
        className="w-full flex items-center justify-between"
      >
        {isEdit && (
          <>
            <ButtonBase className="bg-white/30 backdrop-blur-3xl min-h-[30px] min-w-[80px] px-3 rounded-full flex items-center justify-center">
              <HiMenu className="w-6 h-6 text-white" />
            </ButtonBase>
            <ButtonBase className="bg-white/30 backdrop-blur-3xl min-h-[30px] min-w-[80px] px-3 rounded-full flex items-center justify-center">
              <span>Select</span>
            </ButtonBase>
          </>
        )}
      </div>
    </React.Fragment>
  );
});
StatusBar.displayName = "SearchField";
export default React.memo(StatusBar);
