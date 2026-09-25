"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

/** Light/dark toggle for the storybook chrome (uses next-themes' class strategy). */
function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time client-mount flag to avoid a hydration mismatch on the theme icon
    setMounted(true);
  }, []);

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-sm"
      aria-label="Temayı değiştir"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {mounted && resolvedTheme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  );
}

export { ThemeToggle };
