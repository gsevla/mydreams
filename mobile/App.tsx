import { AuthenticationProvider } from "@providers/Authentication";
import { NavigationProvider } from "@providers/Navigation";
import { ThemeProvider } from "@providers/Theme";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <ThemeProvider>
        <AuthenticationProvider>
          <NavigationProvider />
        </AuthenticationProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
