
import React from "react";
import { useTheme } from "@/contexts/ThemeContext";

const Accommodation = () => {
  const { theme } = useTheme();
  
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium dark:text-white">Accommodation</h3>
        <span className="text-xs text-gray-500 dark:text-gray-400">$899.99</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
          <div className="h-24 bg-blue-100 dark:bg-blue-900 relative">
            <img 
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Shinjuku Prince Hotel" 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-0.5 rounded">Check In</div>
          </div>
          <div className="p-2">
            <h4 className="text-xs font-medium dark:text-white">Shinjuku Prince Hotel</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">Check In: 30/06/2023, 3:00 pm</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Check Out: 02/07/2023, 11:00 am</p>
            <div className="flex justify-between mt-1">
              <span className="text-xs dark:text-white">2 Nights</span>
              <button className="text-xs text-green-600 dark:text-green-400">Confirmed</button>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
          <div className="h-24 bg-blue-100 dark:bg-blue-900 relative">
            <img 
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Imperial Tokyo Hotel" 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-0.5 rounded">Check In</div>
          </div>
          <div className="p-2">
            <h4 className="text-xs font-medium dark:text-white">Imperial Tokyo Hotel</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">Check In: 02/07/2023, 3:00 pm</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Check Out: 05/07/2023, 11:00 am</p>
            <div className="flex justify-between mt-1">
              <span className="text-xs dark:text-white">3 Nights</span>
              <button className="text-xs text-green-600 dark:text-green-400">Confirmed</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accommodation;
