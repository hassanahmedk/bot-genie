'use client'
import React, { useState } from 'react'
import DashboardStats from '@/components/Dashboard/DashboardStats'
import AddAlert from '@/components/Dashboard/InnerComponents/Alert/AddAlert'
import DashboardTable from '@/components/Dashboard/InnerComponents/DashboardTable'
import Button from '@/components/shared/Button'

function Page() {
  const [addAlertOpen, setAddAlertOpen] = useState<boolean>(false);
  
  const handleAddAlert = () => {
    setAddAlertOpen(true);
  }
  
  return (
    <div className='flex flex-col gap-4'>
      <DashboardStats />
      <Button title='Add Alert' onClick={handleAddAlert} type='primary' className='self-end' />
      <DashboardTable />
      { addAlertOpen &&
        <AddAlert handleClose={()=>setAddAlertOpen(false)} />
      }
    </div>
  )
}

export default Page
