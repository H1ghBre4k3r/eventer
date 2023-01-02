import { createColors } from "@eventer/styles/colors";
import { createContentStyles } from "@eventer/styles/content";
import { StylingProps } from "@eventer/styles/stylingProps";
import { createTextStyles } from "@eventer/styles/text";
import React, { PropsWithChildren } from "react";
import { useColorScheme } from "react-native";

export type StyleContextType = {
    Colors: ReturnType<typeof createColors>;
    Text: ReturnType<typeof createTextStyles>;
    Content: ReturnType<typeof createContentStyles>;
};

export const StyleContext = React.createContext<StyleContextType>({
    Colors: createColors(),
    Text: createTextStyles(),
    Content: createContentStyles(),
});

type StyleContextProviderProps = unknown;

export const StyleContextProvider: React.FC<PropsWithChildren<StyleContextProviderProps>> = ({ children }) => {
    const systemScheme = useColorScheme();

    const styleProps: StylingProps = {
        mode: systemScheme,
    };

    const value: StyleContextType = {
        Colors: createColors(styleProps),
        Text: createTextStyles(styleProps),
        Content: createContentStyles(styleProps),
    };

    return <StyleContext.Provider value={value}>{children}</StyleContext.Provider>;
};
