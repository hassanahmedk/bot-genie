'use client'
import React, { useContext, useState } from "react";
import DashboardLog from "./InnerComponents/DashboardLog";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MyContext from "@/context/appContext";

function DashboardLogs() {
  const { currentScreen, setCurrentScreen } = useContext(MyContext);
  const router = useRouter();

  const [logs, setLogs] = useState([
    {
      title: "lorem ipsum sit amet lorem",
      time: "5:04 PM - 12 Dec 2023",
    },
    {
      title: "lorem ipsum sit amet lorem",
      time: "5:04 PM - 12 Dec 2023",
    },
    {
      title: "lorem ipsum sit amet lorem",
      time: "5:04 PM - 12 Dec 2023",
    },
    {
      title: "lorem ipsum sit amet lorem",
      time: "5:04 PM - 12 Dec 2023",
    },
    {
      title: "lorem ipsum sit amet lorem",
      time: "5:04 PM - 12 Dec 2023",
    },
    {
      title: "lorem ipsum sit amet lorem",
      time: "5:04 PM - 12 Dec 2023",
    },
    {
      title: "lorem ipsum sit amet lorem",
      time: "5:04 PM - 12 Dec 2023",
    },
  ]);

  return (
    <div className="border border-gray-300 shadow-sm flex flex-col gap-2 pt-4 rounded">
      <h2 className="text-xl font-semibold px-4 ">Logs</h2>
      <div id="dashboard-logs" className="flex flex-col gap-2 p-4">
        {
          logs.map((log, index)=> <DashboardLog key={index} title={log.title} time={log.time}/>)
        }
      </div>
      <div className="w-full flex justify-center text-sm py-2 text-primary-500 font-semibold border-t border-gray-300">
        <button href="" onClick={()=>{setCurrentScreen("LOGS"); router.push('/dashboard/logs')}} >View All Logs</button>
      </div>
    </div>
  );
}

export default DashboardLogs;
