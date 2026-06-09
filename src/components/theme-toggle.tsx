"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const themes: Array<{
  icon: typeof Sun;
  label: string;
  value: Theme;
}> = [
  {
    icon: Sun,
    label: "Claro",
    value: "light",
  },
  {
    icon: Moon,
    label: "Oscuro",
    value: "dark",
  },
];

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getInitialTheme(): Theme {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return getSystemTheme();
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme(getInitialTheme());
  }, []);

  function selectTheme(nextTheme: Theme) {
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
  }

  return (
    <div className="theme-toggle" aria-label="Selector de tema" role="group">
      {themes.map((item) => {
        const Icon = item.icon;
        const isSelected = theme === item.value;

        return (
          <button
            key={item.value}
            type="button"
            className="theme-toggle-button"
            aria-label={`Modo ${item.label.toLowerCase()}`}
            aria-pressed={isSelected}
            data-active={isSelected}
            onClick={() => selectTheme(item.value)}
          >
            <Icon className="size-4" aria-hidden="true" />
            <span className="sr-only">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
