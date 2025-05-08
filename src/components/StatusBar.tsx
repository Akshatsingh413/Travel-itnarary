
import React from "react";
import { useTheme } from "@/contexts/ThemeContext";

const StatusBar = () => {
  const { theme } = useTheme();
  
  return (
    <div className="flex justify-between items-center p-2 bg-amber-400 dark:bg-black text-white">
      <div className="text-xs">8:41</div>
      <div className="flex items-center space-x-1">
        <div className="w-3 h-2 bg-white"></div>
        <div className="w-2 h-2 bg-white"></div>
        <div className="w-1 h-2 bg-white"></div>
      </div>
    </div>
  );
};

export default StatusBar;
