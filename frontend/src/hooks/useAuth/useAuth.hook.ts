import { AuthContextType } from "@eventer/api/Auth";
import { AuthContext } from "@eventer/contexts/authContext";
import { useContext } from "react";

export const useAuth: () => AuthContextType = () => useContext(AuthContext);
