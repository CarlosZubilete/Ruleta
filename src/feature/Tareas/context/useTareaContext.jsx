import { useContext } from "react";
import TareaContext from "./TareaContext";

export function useTareaContext () {
  const context = useContext(TareaContext);
  if (!context) {
    throw new Error('useTareaContext must be used inside of TareaProvider');
  }
  return context;
}