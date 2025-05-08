
import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="flex justify-between items-center p-4">
      <div>
        <h1 className="text-xl font-bold dark:text-white">Hello Chhavi!</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">Ready for the trip?</p>
      </div>
      <div className="flex items-center">
        <button
          onClick={toggleTheme}
          className="mr-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
        >
          {theme === "dark" ? (
            <Sun size={20} className="text-amber-400" />
          ) : (
            <Moon size={20} className="text-blue-500" />
          )}
        </button>
        <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white">
          C
        </div>
      </div>
    </div>
  );
};

export default Header;
