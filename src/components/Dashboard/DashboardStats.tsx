import React from 'react'
import DashboardStatCard from './InnerComponents/DashboardStatCard'

function DashboardStats() {
  return (
    <div className='flex gap-4 flex-wrap'>
      <DashboardStatCard
        title={"Total Alerts"}
        value={"240"}
        bg={"#FFEFE7"}
        color={"#FF5500"}
      />
      <DashboardStatCard
        title={"Active Alerts"}
        value={"10"}
        bg={"#E8F0FB"}
        color={"#4493FF"}
      />
      <DashboardStatCard
        title={"Today Alerts"}
        value={"32"}
        bg={"#FDEBF9"}
        color={"#FF67DD"}
      />
    </div>
  )
}

export default DashboardStats
