import { createGlobalState } from "react-hooks-global-states";

export const useMode = createGlobalState(getSystemModePreference());

export function getSystemModePreference() {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    return mediaQuery.matches ? "dark" : "light";
}
