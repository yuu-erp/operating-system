import useLocalStorage from "@/hooks/useLocalStorage";
import React, { PropsWithChildren, useCallback, useRef } from "react";

type ISettingContext = {
  isEdit: boolean;
  onToggleEdit: (value: boolean) => void;
};

export const SettingContext = React.createContext<ISettingContext>(null!);

export const SettingProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isEdit, setIsEdit] = useLocalStorage<boolean>("isEdit", false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const onToggleEdit = useCallback((value: boolean) => setIsEdit(value), []);

  const handleMouseDown = () => {
    timerRef.current = setTimeout(() => {
      onToggleEdit(true);
    }, 1000);
  };

  const handleMouseUp = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  return (
    <SettingContext.Provider
      value={{
        isEdit,
        onToggleEdit,
      }}
    >
      <div
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        style={{ width: "100vw", height: "100vh" }}
        onClick={() => onToggleEdit(false)}
      >
        {children}
      </div>
    </SettingContext.Provider>
  );
};
