import MobileLayout from "@/components/layouts/MobileLayout";
// import { useDeviceType } from "@/hooks/useDeviceType";
import React from "react";

export default function App() {
  // const deviceType = useDeviceType();

  return (
    <React.Fragment>
      {/* {deviceType === 'mobile' && <MobileLayout />} */}
      <MobileLayout />
    </React.Fragment>
  )
}