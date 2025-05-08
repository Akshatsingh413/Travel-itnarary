
import React from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import StatusBar from "@/components/StatusBar";
import Header from "@/components/Header";
import TripCard from "@/components/TripCard";
import FlightDetails from "@/components/FlightDetails";
import Accommodation from "@/components/Accommodation";
import Activities from "@/components/Activities";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="max-w-md mx-auto bg-gray-50 dark:bg-gray-900 min-h-screen">
        <StatusBar />
        <div className="p-4">
          <Header />
          <h2 className="text-lg font-medium mb-1 dark:text-white">Your upcoming Trip</h2>
          <TripCard />
          <FlightDetails />
          <Accommodation />
          <Activities />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
