import { useEffect, useState } from "react";

export default function ThemeToggle() {
  // Initialize state. We check localStorage first, defaulting to 'dark' if nothing is saved.
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      // If they explicitly saved 'light', return false. Otherwise, default to true (dark).
      return savedTheme !== "light";
    }
    return true;
  });

  // Apply the theme to the <html> tag whenever isDark changes
  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      // Remove the light override, falling back to your default :root dark variables
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "dark");
    } else {
      // Apply the light theme override
      root.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      // Using the semantic variables from your CSS to style the button
      className="px-4 py-2 bg-surface text-text border border-border rounded-8 font-mono text-preset-4 hover:bg-neutral-600 transition-colors cursor-pointer"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? "☀️ Switch to Light" : "🌙 Switch to Dark"}
    </button>
  );
}
