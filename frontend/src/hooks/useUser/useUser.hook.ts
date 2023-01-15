import { UserContext } from "@eventer/contexts/userContext";
import { useContext } from "react";

export const useUser = () => useContext(UserContext);
