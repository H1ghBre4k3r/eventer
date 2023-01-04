import { createColors } from "./colors";
import { StylingProps } from "./stylingProps";
import { createTextStyles } from "./text";

export const createInputStyles = (props?: StylingProps) => {
    const colors = createColors(props);

    const text = createTextStyles(props);

    return {
        text: {
            color: text.colors.primary,
            fontSize: text.fontSize.s,
        },
        label: {
            color: props?.mode === "dark" ? colors.shades.light : colors.shades.dark,
            fontSize: text.fontSize.xs,
        },
        border: {
            color: colors.shades.mediumLight,
        },
        placeholder: {
            color: props?.mode === "dark" ? colors.shades.mediumLight : colors.shades.mediumDark,
        },
    };
};
