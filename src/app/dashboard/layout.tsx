"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation/Navigation";
import DashboardHeader from "@/components/shared/DashboardHeader";
import MyContext from "@/context/appContext";
import { useState } from "react";

function RootLayout({ children }: { children: React.ReactNode }) {
  const [currentScreen, setCurrentScreen] = useState<string>("HOME");

  return (
    <MyContext.Provider value={{ currentScreen, setCurrentScreen }}>
      <div id="main-dashboard" className="h-screen w-screen flex">
        <Navigation />
        <div id="dashboard-content" className="w-full h-full">
          <DashboardHeader />
          <div
            id="dashboard-screen"
            className="px-10 py-8 flex flex-col gap-6 overflow-scroll max-h-[92vh] no-scrollbar"
          >
            <h2 className="text-xl font-semibold">{currentScreen.slice(0,1) + currentScreen.slice(1).toLowerCase()}</h2>
            {children}
          </div>
        </div>
      </div>
    </MyContext.Provider>
  );
}

export default RootLayout;
