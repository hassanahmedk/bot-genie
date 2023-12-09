import React from "react";

function DashboardStatCard({
  title,
  value,
  bg,
  color,
}: {
  title: string;
  value: string;
  bg: string;
  color: string;
}) {
  return (
    <div className={`w-52 px-4 py-6 flex flex-col gap-2 font-semibold rounded-lg shadow-sm`} style={{backgroundColor: bg}}>
      <div className="text-black text-md">{title}</div>
      <div className={` text-3xl`} style={{color: color}}>{value}</div>
    </div>
  );
}

export default DashboardStatCard;
