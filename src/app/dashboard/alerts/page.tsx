'use client'
import React, { useEffect, useState } from 'react'
import DashboardStats from '@/components/Dashboard/DashboardStats'
import AddAlert from '@/components/Dashboard/InnerComponents/Alert/AddAlert'
import DashboardAlertsTable from '@/components/Dashboard/InnerComponents/DashboardAlertsTable.jsx'
import Button from '@/components/shared/Button'

function Page() {
  const [addAlertOpen, setAddAlertOpen] = useState<boolean>(false);
  const [alerts, setAlerts] = useState<any>([]);
  const [totalAlerts, setTotalAlerts] = useState<number>(0);
  const [activeAlerts, setActiveAlerts] = useState<number>(0);
  // text to show when there's no rows in the table: either loading or no alerts are there
  const [noRowsText, setNoRowsText] = React.useState("Loading...");

  useEffect(()=>{
    setNoRowsText("Loading...");
    const token = localStorage.getItem('token');
    setAlertsFromApi(token);
  }, [])

  const alertStats = [
    {
      title:'Total Alerts', value: totalAlerts, bg:'#FFEFE7', color:'#FF5500'
    },
    {
      title:'Active Alerts', value: activeAlerts, bg:'#E8F0FB', color:'#4493FF'
    },
    {
      title:'Inactive Alerts', value: 0, bg:'#F2F0BB', color:'#BEAB00'
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
      // console.log('datafrom api', data);
      setAlerts(data.data);
      setTotalAlerts(data.data.length)
      setActiveAlerts(data.data.length)
      setNoRowsText("No alerts are added.");
    } catch (error) {
      console.log(error);
      setNoRowsText("An error occured while loading alerts, please try reloading.");
    }
  }
  
  const handleAlertDelete = (alertID:string) => {
    setAlerts((prev:any) => prev.filter((alert:any) => alert._id !== alertID ))
  }

  return (
    <div className='flex flex-col gap-4'>
      <DashboardStats stats={alertStats} />
      <Button title='Add Alert' onClick={handleAddAlert} type='primary' className='self-end' />
      <DashboardAlertsTable 
        alerts={alerts} noRowsText={noRowsText}
        handleAlertDelete={handleAlertDelete}
        />
      { addAlertOpen &&
        <AddAlert handleClose={()=>setAddAlertOpen(false)} />
      }

    </div>
  )
}

export default Page
