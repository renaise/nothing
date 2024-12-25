import React, { useState } from "react";
import Header from "./Header";
import ProjectGrid from "./ProjectGrid";

interface HomeProps {
  initialTheme?: "light" | "dark";
}

const Home = ({ initialTheme = "light" }: HomeProps) => {
  const [isDarkMode, setIsDarkMode] = useState(initialTheme === "dark");

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    // In a real implementation, this would update the theme context/provider
  };

  return (
    <div className={`min-h-screen bg-background ${isDarkMode ? "dark" : ""}`}>
      <Header
        isDarkMode={isDarkMode}
        onThemeToggle={handleThemeToggle}
        title="Modern Portfolio"
      />
      <main className="container mx-auto py-8 bg-background">
        <ProjectGrid />
      </main>
    </div>
  );
};

export default Home;
