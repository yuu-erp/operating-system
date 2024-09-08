import MobileLayout from "@/components/layouts/MobileLayout";
import { SettingProvider } from "./contexts/SettingContext";

export default function App() {
  return (
    <SettingProvider>
      <MobileLayout />
    </SettingProvider>
  )
}