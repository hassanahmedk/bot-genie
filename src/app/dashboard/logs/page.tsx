'use client'
import React, { useState } from 'react'
import DashboardStats from '@/components/Dashboard/DashboardStats'
import AddAlert from '@/components/Dashboard/InnerComponents/Alert/AddAlert'
import DashboardLogsTable from '@/components/Dashboard/InnerComponents/DashboardLogsTable'
import Button from '@/components/shared/Button'

function Page() {
  const [addAlertOpen, setAddAlertOpen] = useState<boolean>(false);
  
  const handleAddAlert = () => {
    setAddAlertOpen(true);
  }

  const logStats = [
    {
      title:'Total Logs', value: 240, bg:'#FFEFE7', color:'#FF5500'
    },
    {
      title:'Today Logs', value: 32, bg:'#FDEBF9', color:'#FF67DD'
    }
  ]  
  
  
  return (
    <div className='flex flex-col gap-4'>
      <DashboardStats stats={logStats} />
      <Button title='Download' onClick={handleAddAlert} type='primary' className='self-end' />
      <div className='max-h-[60vh] overflow-scroll no-scrollbar'>
      <DashboardLogsTable />
      </div>
    </div>
  )
}

export default Page
