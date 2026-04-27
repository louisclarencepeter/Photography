import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import {
  applyTheme,
  getStoredTheme,
  THEME_APPLIED_EVENT,
  THEME_PREFERENCE_EVENT,
  THEME_STORAGE_KEY
} from "../theme";

function getCurrentTheme() {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function ThemeSwitch() {
  const [theme, setTheme] = useState(() => {
    if (typeof document === "undefined") {
      return "dark";
    }

    return getStoredTheme() ?? getCurrentTheme();
  });

  useEffect(() => {
    function handleThemeApplied(event) {
      setTheme(event.detail?.theme ?? getCurrentTheme());
    }

    window.addEventListener(THEME_APPLIED_EVENT, handleThemeApplied);
    return () => window.removeEventListener(THEME_APPLIED_EVENT, handleThemeApplied);
  }, []);

  function handleToggle() {
    const nextTheme = theme === "light" ? "dark" : "light";
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    applyTheme(nextTheme);
    window.dispatchEvent(new Event(THEME_PREFERENCE_EVENT));
    setTheme(nextTheme);
  }

  const isLight = theme === "light";
  const Icon = isLight ? FaSun : FaMoon;

  return (
    <button
      type="button"
      className="theme-switch"
      aria-label={`Switch to ${isLight ? "dark" : "light"} theme`}
      aria-pressed={isLight}
      title={`Switch to ${isLight ? "dark" : "light"} theme`}
      onClick={handleToggle}
    >
      <Icon aria-hidden="true" />
      <span className="sr-only">{isLight ? "Light theme" : "Dark theme"}</span>
    </button>
  );
}

export default ThemeSwitch;
