import ButtonBase from "@/components/shared/ButtonBase";
import { HEIGHT_SEARCH_FIELD_MOBILE } from "@/constants";
import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchField = React.forwardRef<HTMLDivElement, any>((props, ref) => {
  const {} = props
  return (
    <React.Fragment>
      <div
      ref={ref}
        style={{
          height: `${HEIGHT_SEARCH_FIELD_MOBILE}px`,
        }}
        className="w-full flex items-center justify-center"
      >
        <ButtonBase
          LeftIcon={IoSearch}
          iconClassName="w-5 h-5"
          className="flex items-center justify-center bg-white/10 backdrop-blur-3xl min-h-[30px] px-3 rounded-full text-sm"
        >
          <span>Search</span>
        </ButtonBase>
      </div>
    </React.Fragment>
  );
});
SearchField.displayName = "SearchField";
export default React.memo(SearchField);
