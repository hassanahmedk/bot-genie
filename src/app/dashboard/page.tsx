import DashboardAlerts from '@/components/Dashboard/DashboardAlerts'
import DashboardLogs from '@/components/Dashboard/DashboardLogs'
import DashboardStats from '@/components/Dashboard/DashboardStats'
import DashboardSubscription from '@/components/Dashboard/DashboardSubscription'
import React from 'react'

function page() {
  return (
    <div id='dashboard-screen' className='px-10 py-8 flex flex-col gap-6 overflow-scroll max-h-[92vh] no-scrollbar'>
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <div className="flex flex-col md:flex-row gap-10">
        <div className='flex flex-col gap-6 w-full'>
          <DashboardStats />
          <DashboardLogs />
        </div>
        
        <div className='flex flex-col gap-6 w-full'>
          <DashboardAlerts />
          <DashboardSubscription />
        </div>
      </div>

    </div>
  )
}

export default page
