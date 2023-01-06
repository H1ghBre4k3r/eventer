import { createColors } from "./colors";
import { StylingProps } from "./stylingProps";

export const createContentStyles = (props?: StylingProps) => {
    const colors = createColors(props);

    const separator = {
        color: props?.mode === "dark" ? colors.shades.mediumDark : colors.shades.veryLight,
    };

    const shadows = {
        color: props?.mode === "dark" ? colors.base.black : colors.shades.soft,
    };

    const background = {
        bg0: props?.mode === "dark" ? colors.dark.background.base : colors.base.white,
        bg1: props?.mode === "dark" ? colors.nord.polarNight.nord0 : colors.base.white,
        bg2: props?.mode === "dark" ? colors.nord.polarNight.nord1 : colors.base.white,
        bg3: props?.mode === "dark" ? colors.nord.polarNight.nord2 : colors.base.white,
    };

    // TODO lome: when introducing dark-mode, use several stages of Content
    return {
        background,
        separator,
        shadows,
    };
};
