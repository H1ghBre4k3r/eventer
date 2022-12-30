import { StyleContext } from "@eventer/contexts/styleContext";
import { useContext } from "react";

/*
 * A utility hook for accessing the contents of the next StyleContext.
 */
export const useStyle = () => useContext(StyleContext);
