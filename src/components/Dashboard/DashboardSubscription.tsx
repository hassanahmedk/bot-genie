"use client"
import React from "react";
import Button from "../shared/Button";

function DashboardSubscription() {
  return (
    <div id="dashboard-subscription" className="w-full bg-[#161E54] text-fullWhite px-6 py-4 rounded">
      <div className="bg-[#1B204A] text-2xl pb-4">Your Subscription</div>
      <div className="flex flex-col py-6 gap-2">
        <div className="text-sm opacity-75">Renews on 15 January</div>
        <div className="text-2xl font-semibold">Pro Plan</div>
        <div className="opacity-90">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
          praesentium aperiam voluptas maxime.
        </div>
        <Button title="See Subscriptions" onClick={()=>{}} type="primary" className="mt-6 self-center" />
      </div>
    </div>
  );
}

export default DashboardSubscription;
