import { useState } from "react";
import { useIsomorphicLayoutEffect } from "react-use";
import { PrefersColorScheme } from ".";

const prefersDark = /* @__PURE__ */ window.matchMedia("(prefers-color-scheme: dark)");

export function useDarkMode(prefersColorScheme?: PrefersColorScheme): boolean {
    const [darkMode, setDarkMode] = useState(() =>
        prefersColorScheme === "system" && prefersDark
            ? prefersDark.matches
            : prefersColorScheme === "dark",
    );

    useIsomorphicLayoutEffect(() => {
        if (prefersColorScheme === "system" && prefersDark) {
            setDarkMode(prefersDark.matches);
            const handler = (evt: MediaQueryListEvent): void => setDarkMode(evt.matches);
            prefersDark.addEventListener("change", handler);
            return () => prefersDark.removeEventListener("change", handler);
        } else {
            setDarkMode(prefersColorScheme === "dark");
            return;
        }
    }, [prefersColorScheme]);

    return darkMode;
}
