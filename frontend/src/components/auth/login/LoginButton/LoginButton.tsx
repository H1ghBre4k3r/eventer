import React, { FC } from "react";
import { Button } from "@eventer/components/general/input/Button";
import { useLoginButtonStyle } from "./LoginButton.style";

type LoginButtonProps = {
    onPress?: () => void;
};
export const LoginButton: FC<LoginButtonProps> = ({ onPress }) => {
    const { Label, Button: ButtonStyle } = useLoginButtonStyle();

    return <Button onPress={onPress} label="Login" labelStyle={Label} style={ButtonStyle} />;
};
