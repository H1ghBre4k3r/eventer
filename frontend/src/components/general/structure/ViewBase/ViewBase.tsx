import React, { FC, PropsWithChildren } from "react";
import { SafeAreaView } from "react-native";
import { useViewBaseStyle } from "./ViewBase.style";

export const ViewBase: FC<PropsWithChildren> = ({ children }) => {
    const { ViewBase: ViewBaseStyle } = useViewBaseStyle();

    return <SafeAreaView style={ViewBaseStyle}>{children}</SafeAreaView>;
};
