import { ServicesContext } from "@providers/Services";
import { useContext } from "react";

export function useServices() {
  return useContext(ServicesContext);
}
