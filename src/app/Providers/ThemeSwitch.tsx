"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div >
      {theme === "light" ? (
        <SunIcon className="h-10 text-white" onClick={() => setTheme("dark")} />
      ): (
        <MoonIcon className="h-10" onClick={() => setTheme("light")} />
      )}
    </div>
  );
};

export default ThemeSwitcher;
