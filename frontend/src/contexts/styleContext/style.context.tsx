import { createColors } from "@eventer/styles/colors";
import { StylingProps } from "@eventer/styles/stylingProps";
import React, { PropsWithChildren } from "react";
import { useColorScheme } from "react-native";

export type StyleContextType = {
    Colors: ReturnType<typeof createColors>;
};

export const StyleContext = React.createContext<StyleContextType>({
    Colors: createColors(),
});

type StyleContextProviderProps = unknown;

export const StyleContextProvider: React.FC<PropsWithChildren<StyleContextProviderProps>> = ({ children }) => {
    const systemScheme = useColorScheme();

    const styleProps: StylingProps = {
        mode: systemScheme,
    };
    const value: StyleContextType = {
        Colors: createColors(styleProps),
    };

    return <StyleContext.Provider value={value}>{children}</StyleContext.Provider>;
};
