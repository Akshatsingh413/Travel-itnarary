
import React from "react";

const TripCard = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden my-4 h-48">
      <img 
        src="https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
        alt="Tokyo" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-4 text-white">
        <h2 className="text-3xl font-bold">TOKYO</h2>
        <p className="text-sm">June 30 - July 5, 2023</p>
      </div>
      <div className="absolute bottom-4 right-4 flex space-x-2">
        <div className="bg-black/40 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white flex items-center">
          <span className="mr-1">🌡️</span> 32°C
        </div>
        <div className="bg-black/40 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white flex items-center">
          <span className="mr-1">🕙</span> 18:42
        </div>
        <div className="bg-black/40 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white flex items-center">
          <span className="mr-1">☀️</span> Clear
        </div>
      </div>
    </div>
  );
};

export default TripCard;
