import { AuthenticationContext } from "@providers/Authentication";
import { useContext } from "react";

export function useAuthentication() {
  return useContext(AuthenticationContext);
}
