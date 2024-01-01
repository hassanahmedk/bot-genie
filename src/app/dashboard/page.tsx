'use client'
import DashboardAlerts from "@/components/Dashboard/DashboardAlerts";
import DashboardLogs from "@/components/Dashboard/DashboardLogs";
import DashboardStats from "@/components/Dashboard/DashboardStats";
import DashboardSubscription from "@/components/Dashboard/DashboardSubscription";
import React, { useLayoutEffect } from "react";

function Page() {

  useLayoutEffect(()=>{
    
  })

  const alertStats = [
    {
      title:'Total Alerts', value: 240, bg:'#FFEFE7', color:'#FF5500'
    },
    {
      title:'Active Alerts', value: 10, bg:'#E8F0FB', color:'#4493FF'
    },
    {
      title:'Today Alerts', value: 32, bg:'#FDEBF9', color:'#FF67DD'
    },
  ]  
  
  return (
    <div className="flex flex-col md:flex-row gap-10">
      <div className="flex flex-col gap-6 w-full">
        <DashboardStats stats={alertStats} />
        <DashboardLogs />
      </div>

      <div className="flex flex-col gap-6 w-full">
        <DashboardAlerts />
        <DashboardSubscription />
      </div>
    </div>
  );
}

export default Page;
