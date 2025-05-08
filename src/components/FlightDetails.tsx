
import React from "react";
import { useTheme } from "@/contexts/ThemeContext";

const FlightDetails = () => {
  const { theme } = useTheme();
  
  return (
    <div className="rounded-xl overflow-hidden mb-4">
      <div className="flex justify-between items-center p-3 bg-blue-600 dark:bg-indigo-900 text-white">
        <h3 className="font-medium">Flight Details</h3>
        <span className="text-xs">$548.99</span>
      </div>
      <div className="bg-white dark:bg-gray-800 p-4">
        <div className="flex justify-between items-center">
          <div>
            <div className="font-bold dark:text-white">DEL</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Delhi, India</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-0.5 bg-gray-300 dark:bg-gray-600 relative">
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"></div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">12:00-15:30</div>
          </div>
          <div>
            <div className="font-bold dark:text-white">NRT</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Tokyo, Japan</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightDetails;
