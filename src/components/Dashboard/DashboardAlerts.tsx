"use client";
import Link from "next/link";
import React, { useState } from "react";
import DashboardAlert from "./InnerComponents/DashboardAlert";

function DashboardAlerts() {
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
      <h2 className="text-xl font-semibold px-4 ">Alerts</h2>
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
        <Link href="">View All Alerts</Link>
      </div>
    </div>
  );
}

export default DashboardAlerts;
