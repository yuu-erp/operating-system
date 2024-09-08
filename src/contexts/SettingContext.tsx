import useLocalStorage from "@/hooks/useLocalStorage";
import React, { PropsWithChildren, useCallback } from "react";

type ISettingContext = {
  isEdit: boolean;
  onToggleEdit: (value: boolean) => void;
};

export const SettingContext = React.createContext<ISettingContext>(null!);

export const SettingProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isEdit, setIsEdit] = useLocalStorage<boolean>("isEdit", false);

  const onToggleEdit = useCallback((value: boolean) => setIsEdit(value), []);

  return (
    <SettingContext.Provider
      value={{
        isEdit,
        onToggleEdit,
      }}
    >
      {children}
    </SettingContext.Provider>
  );
};
