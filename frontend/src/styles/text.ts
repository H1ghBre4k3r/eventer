import { createColors } from "./colors";
import { StylingProps } from "./stylingProps";

export const createTextStyles = (props?: StylingProps) => {
    const colors = createColors(props);

    const fontSize = {
        regular: 24,
        xxs: 12,
        xs: 16,
        s: 20,
        m: 24,
        l: 32,
    };

    return {
        colors: {
            primary: props?.mode === "dark" ? colors.base.white : colors.base.black,
            secondary: props?.mode === "dark" ? colors.base.black : colors.base.white,
            disabled: colors.base.inactive,
        },
        fontSize,
    };
};
