"use client";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import DashboardAlert from "./InnerComponents/DashboardAlert";
import Button from "../shared/Button";
import MyContext from "@/context/appContext";
import { useRouter } from "next/navigation";

function DashboardAlerts() {
  const { currentScreen, setCurrentScreen } = useContext(MyContext);
  const router = useRouter();

  const [alerts, setAlerts] = useState([
  ]);

  
  useEffect(()=>{
    const token = localStorage.getItem('token');
    setAlertsFromApi(token);
  }, [])

  
  const setAlertsFromApi = async (token: string | null) => {
    try {
      const response = await fetch('/api/dashboard/alerts/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token as string
        },
      });
      const data = await response.json();
      // console.log('datafrom api', data);
      setAlerts(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="border border-gray-300 shadow-sm flex flex-col gap-2 pt-4 rounded w-full">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold px-4 ">Alerts</h2>
        <Button title="Create New" type="primary" 
          onClick={()=>{setCurrentScreen("ALERTS"); router.push('/dashboard/alerts')}} 
          className="w-32 text-sm mr-4" />
      </div>
      <div id="dashboard-alerts" className="flex flex-col gap-2 p-4">
        {
        alerts.length ?
        alerts.map((alert:any, index) => (
          <DashboardAlert 
            key={index} 
            title={alert.alertName} 
            condition={alert.condition}
            currency={alert.exchange}
            price={`#Indicators: ${alert.indicators?.length}`}
            trigger={alert.trigger}
            expiresOn={alert.expiresOn}
            />
        ))
          : <span className="italic text-center my-4">Loading Alerts...</span>
      }
      </div>
      <div className="w-full flex justify-center text-sm py-2 text-primary-500 font-semibold border-t border-gray-300">
        <button onClick={()=>{setCurrentScreen("ALERTS"); router.push('/dashboard/alerts')}}  >
          View All Alerts
        </button>
      </div>
    </div>
  );
}

export default DashboardAlerts;
