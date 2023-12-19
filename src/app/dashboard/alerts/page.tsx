import DashboardStats from '@/components/Dashboard/DashboardStats'
import DashboardTable from '@/components/Dashboard/InnerComponents/DashboardTable'
import React from 'react'

function page() {
  return (
    <div>
      <DashboardStats />
      <DashboardTable />
    </div>
  )
}

export default page
