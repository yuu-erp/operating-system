import React, { PropsWithChildren } from "react";

const DesktopLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto py-12 px-4">{children}</div>
    </div>
  );
};

export default DesktopLayout;
