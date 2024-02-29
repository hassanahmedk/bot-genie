'use client'
import React, { useEffect, useState } from 'react'
import DashboardStats from '@/components/Dashboard/DashboardStats'
import AddAlert from '@/components/Dashboard/InnerComponents/Alert/AddAlert'
import DashboardTable from '@/components/Dashboard/InnerComponents/DashboardTable.jsx'
import Button from '@/components/shared/Button'

function Page() {
  const [addAlertOpen, setAddAlertOpen] = useState<boolean>(true);
  const [alerts, setAlerts] = useState<any>([]);

  useEffect(()=>{
    const token = localStorage.getItem('token');
    setAlertsFromApi(token);
  }, [])

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

  const setAlertsFromApi = async (token: string | null) => {
    try {
      const response = await fetch('/api/dashboard/alerts/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token as string
        },
      });
      const data = await response.json();
      console.log('datafrom api', data);
      setAlerts(data);
    } catch (error) {
      console.log(error);
    }
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
