import React from "react";
import { Moon, Sun } from "lucide-react";
import { Switch } from "./ui/switch";

interface HeaderProps {
  isDarkMode?: boolean;
  onThemeToggle?: () => void;
  title?: string;
}

const Header = ({
  isDarkMode = false,
  onThemeToggle = () => {},
  title = "Portfolio",
}: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background h-20 flex items-center px-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-mono text-2xl font-bold">{title}</h1>

        <div className="flex items-center gap-2">
          <Sun className="h-4 w-4" />
          <Switch
            checked={isDarkMode}
            onCheckedChange={onThemeToggle}
            aria-label="Toggle theme"
          />
          <Moon className="h-4 w-4" />
        </div>
      </div>
    </header>
  );
};

export default Header;
