import React from "react";
import useLocalStorage from "./useLocalStoregeHook";
import './styles.css'

export default function LightAndDarkMode() {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  function handleThemeChange() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <h2>Hello World!</h2>
        <button onClick={handleThemeChange} > Change Theme</button>
      </div>
    </div>
  );
}
