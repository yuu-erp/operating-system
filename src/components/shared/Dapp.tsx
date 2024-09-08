import { PADDING_DAPP_MOBILE } from "@/constants";
import { ItemDappSize } from "@/types/layout";
import React from "react";

export interface DappProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'id'>, IDapp, ItemDappSize {}

const Dapp = React.forwardRef<HTMLDivElement, DappProps>((props, ref) => {
  const { id, name, logo, x, y, itemWidth, itemHeight, ...rest } = props;
  return (
    <React.Fragment>
      <div
        ref={ref}
        style={{
          width: `${itemWidth}px`,
          height: `${itemHeight}px`,
          position: "absolute",
          left: `${x * itemWidth}px`,
          top: `${y * itemHeight}px`,
        }}
        className="rounded-2xl text-white animate-[wiggle_0.25s_ease-in-out_infinite]"
        {...rest}
      >
        <div
          className="w-full h-full"
          style={{
            paddingLeft: `${PADDING_DAPP_MOBILE}px`,
            paddingRight: `${PADDING_DAPP_MOBILE}px`,
          }}
        >
          <div className="w-full aspect-square bg-slate-700 rounded-2xl overflow-hidden">
            <img src={logo} alt={name} className="w-full h-full object-cover" />
          </div>
          <div className="w-full line-clamp-1 text-center text-xs mt-1">
            <span>{name}</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
});

Dapp.displayName = "Dapp";
export default React.memo(Dapp);
