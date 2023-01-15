import { PocketBaseContext } from "@eventer/contexts/pocketBaseContext";
import { useContext } from "react";

export const usePocketbase = () => useContext(PocketBaseContext);
