
import React from "react";
import { useTheme } from "@/contexts/ThemeContext";

const Activities = () => {
  const { theme } = useTheme();
  
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium dark:text-white">Activities</h3>
        <span className="text-xs text-gray-500 dark:text-gray-400">$299.99</span>
      </div>
      
      <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-3 mb-4">
        <div className="grid grid-cols-5 gap-2 mb-3">
          <div className={`rounded-lg p-2 flex flex-col items-center ${theme === 'dark' ? 'bg-blue-900 text-white' : 'bg-amber-400 text-gray-800'}`}>
            <span className="text-xs">SAT</span>
            <span className="text-lg font-bold">30</span>
          </div>
          {[
            { day: "SUN", date: "01" }, 
            { day: "MON", date: "02" }, 
            { day: "TUE", date: "03" }, 
            { day: "WED", date: "04" }
          ].map((item, index) => (
            <div key={index} className="rounded-lg p-2 flex flex-col items-center bg-white dark:bg-gray-700">
              <span className="text-xs text-gray-500 dark:text-gray-400">{item.day}</span>
              <span className="text-lg font-bold dark:text-white">{item.date}</span>
            </div>
          ))}
        </div>
        
        <div>
          <button className={`w-full rounded-lg py-2 px-4 mb-2 text-sm font-medium ${theme === 'dark' ? 'bg-blue-600 text-white' : 'bg-amber-400 text-gray-800'}`}>
            View Details
          </button>
          <span className={`text-xs ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>5 Activities</span>
        </div>
      </div>
      
      <div className="space-y-3">
        <ActivityItem 
          image="https://images.unsplash.com/photo-1558862107-d49ef2a04d72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          title="Sensoji Temple & Asakusa"
          time="10:00 am Morning"
          desc="30 min. from Hotel"
        />
        <ActivityItem 
          image="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1488&q=80"
          title="Tokyo Sky Tree"
          time="2:00 pm Afternoon" 
          desc="15 min. walk from Sensoji"
        />
        <ActivityItem 
          image="https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          title="Shibuya crossing"
          time="Evening before 5:00 pm"
          desc="20 min. by metro from Sky Tree"
        />
      </div>
    </div>
  );
};

const ActivityItem = ({ image, title, time, desc }: { image: string, title: string, time: string, desc: string }) => {
  return (
    <div className="flex bg-white dark:bg-gray-800 rounded-xl overflow-hidden h-16">
      <div className="w-1/4">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="w-3/4 p-2">
        <h4 className="font-medium text-sm dark:text-white">{title}</h4>
        <p className="text-xs text-gray-600 dark:text-gray-400">{time}</p>
        <p className="text-xs text-gray-500 dark:text-gray-500">{desc}</p>
      </div>
    </div>
  );
};

export default Activities;
