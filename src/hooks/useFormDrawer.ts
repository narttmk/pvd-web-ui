import { useContext } from "react";
import { FormDrawerContext } from "../context/FormDrawerContext";

export const useFormDrawer = () => {
  const context = useContext(FormDrawerContext);
  if (!context) {
    throw new Error("useDrawer must be used within a DrawerProvider");
  }
  return context;
};
