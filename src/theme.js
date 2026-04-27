export const THEME_STORAGE_KEY = "lp-theme-preference";
export const THEME_APPLIED_EVENT = "lp-theme-applied";
export const THEME_PREFERENCE_EVENT = "lp-theme-preference-change";

const THEME_COLORS = {
  dark: "#004643",
  light: "#f7efe7"
};

export function getStoredTheme() {
  try {
    const theme = window.localStorage.getItem(THEME_STORAGE_KEY);
    return theme === "light" || theme === "dark" ? theme : null;
  } catch {
    return null;
  }
}

export function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;

  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) {
    themeColor.setAttribute("content", THEME_COLORS[theme]);
  }

  window.dispatchEvent(new CustomEvent(THEME_APPLIED_EVENT, { detail: { theme } }));
}
