import React from "react";
import { useDarkMode } from "./useDarkMode";
import { useIsomorphicLayoutEffect } from "react-use";

export const DarkModeContext = /* @__PURE__ */ React.createContext(false);

export type PrefersColorScheme = "light" | "dark" | "system";

export interface ThemeProviderProps {
    prefersColorScheme?: PrefersColorScheme;
    children: React.JSX.Element;
}
export const ThemeBodyProvider: React.FC<ThemeProviderProps> = ({
    prefersColorScheme,
    children,
}) => {
    const darkMode = useDarkMode(prefersColorScheme);
    useIsomorphicLayoutEffect(() => {
        document.body.classList.add("theme-root");
        document.body.classList.toggle("color-scheme-dark", darkMode);
    }, [darkMode]);
    return <DarkModeContext.Provider value={darkMode}>{children}</DarkModeContext.Provider>;
};
