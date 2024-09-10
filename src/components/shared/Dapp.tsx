import { PADDING_DAPP_MOBILE } from "@/constants";
import { ItemDappSize } from "@/types/layout";
import classNames from "classnames";
import React from "react";
import ButtonBase from "./ButtonBase";
import { FaMinus } from "react-icons/fa6";

export interface DappProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "id">,
    IDapp,
    ItemDappSize {
  isEdit?: boolean;
}

const Dapp = React.forwardRef<HTMLDivElement, DappProps>((props, ref) => {
  const { id, name, logo, x, y, itemWidth, itemHeight, isEdit, ...rest } =
    props;

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
        className={classNames(
          "rounded-2xl text-white",
          isEdit && "animate-[wiggle_0.25s_ease-in-out_infinite]",
        )}
        {...rest}
      >
        <div
          className="w-full h-full pointer-events-none flex items-center justify-center flex-col"
          style={{
            paddingLeft: `${PADDING_DAPP_MOBILE}px`,
            paddingRight: `${PADDING_DAPP_MOBILE}px`,
          }}
        >
          <div className="w-full aspect-square bg-slate-700 rounded-2xl relative">
            <img
              src={logo}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />
            {isEdit && (
              <ButtonBase className="w-5 h-5 rounded-full bg-white/50 backdrop-blur-3xl absolute -top-2 -left-2 flex items-center justify-center">
                <FaMinus className="w-4 h-4 text-black" />
              </ButtonBase>
            )}
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
