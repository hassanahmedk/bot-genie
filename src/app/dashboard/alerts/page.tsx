'use client'
import React, { useState } from 'react'
import DashboardStats from '@/components/Dashboard/DashboardStats'
import AddAlert from '@/components/Dashboard/InnerComponents/Alert/AddAlert'
import DashboardTable from '@/components/Dashboard/InnerComponents/DashboardTable'
import Button from '@/components/shared/Button'

function Page() {
  const [addAlertOpen, setAddAlertOpen] = useState<boolean>(false);

  const alertStats = [
    {
      title:'Total Alerts', value: 240, bg:'#FFEFE7', color:'#FF5500'
    },
    {
      title:'Active Alerts', value: 10, bg:'#E8F0FB', color:'#4493FF'
    },
    {
      title:'Today Alerts', value: 32, bg:'#FDEBF9', color:'#FF67DD'
    },
    {
      title:'Inactive Alerts', value: 4, bg:'#F2F0BB', color:'#BEAB00'
    }
  ]  
  
  const handleAddAlert = () => {
    setAddAlertOpen(true);
  }
  
  return (
    <div className='flex flex-col gap-4'>
      <DashboardStats stats={alertStats} />
      <Button title='Add Alert' onClick={handleAddAlert} type='primary' className='self-end' />
      <DashboardTable />
      { addAlertOpen &&
        <AddAlert handleClose={()=>setAddAlertOpen(false)} />
      }
    </div>
  )
}

export default Page
