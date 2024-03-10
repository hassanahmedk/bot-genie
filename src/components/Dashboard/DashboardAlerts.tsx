"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import DashboardAlert from "./InnerComponents/DashboardAlert";
import Button from "../shared/Button";
import MyContext from "@/context/appContext";
import { useRouter } from "next/navigation";

function DashboardAlerts() {
  const { currentScreen, setCurrentScreen } = useContext(MyContext);
  const router = useRouter();

  const [alerts, setAlerts] = useState([
    {
      title: "lorem ipsum sit amet lorem",
      condition: "grossing-up",
      currency: "BTC",
      price: "$1210",
      trigger: "Everytime",
      expiresOn: "24 Jan 2024",
    },
    {
      title: "lorem ipsum sit amet lorem",
      condition: "grossing-up",
      currency: "BTC",
      price: "$1210",
      trigger: "Only Once",
      expiresOn: "24 Jan 2024",
    },
    {
      title: "lorem ipsum sit amet lorem",
      condition: "grossing-up",
      currency: "BTC",
      price: "$1210",
      trigger: "Everytime",
      expiresOn: "24 Jan 2024",
    },
    {
      title: "lorem ipsum sit amet lorem",
      condition: "grossing-down",
      currency: "BTC",
      price: "$1210",
      trigger: "Everytime",
      expiresOn: "24 Jan 2024",
    },
  ]);

  return (
    <div className="border border-gray-300 shadow-sm flex flex-col gap-2 pt-4 rounded w-full">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold px-4 ">Alerts</h2>
        <Button title="Create New" type="primary" 
          onClick={()=>{setCurrentScreen("ALERTS"); router.push('/dashboard/alerts')}} 
          className="w-32 text-sm mr-4" />
      </div>
      <div id="dashboard-alerts" className="flex flex-col gap-2 p-4">
        {alerts.map((alert, index) => (
          <DashboardAlert 
            key={index} 
            title={alert.title} 
            condition={alert.condition}
            currency={alert.currency}
            price={alert.price}
            trigger={alert.trigger}
            expiresOn={alert.expiresOn}
            />
        ))}
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
