import { AuthenticationProvider } from "@providers/Authentication";
import { NavigationProvider } from "@providers/Navigation";
import { ServicesProvider } from "@providers/Services";
import { ThemeProvider } from "@providers/Theme";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <ServicesProvider>
        <ThemeProvider>
          <AuthenticationProvider>
            <NavigationProvider />
          </AuthenticationProvider>
        </ThemeProvider>
      </ServicesProvider>
      <StatusBar style="auto" />
    </>
  );
}
