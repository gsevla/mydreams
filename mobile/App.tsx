import { NavigationProvider } from "@providers/Navigation";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <NavigationProvider />
      <StatusBar style="auto" />
    </>
  );
}
