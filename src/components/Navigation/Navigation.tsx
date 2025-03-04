"use client"
import React, {useContext, useEffect, useState} from 'react'
import Logo from '../shared/Logo'
import NavigationTab from './InnerComponents/NavigationTab'
import MyContext from '@/context/appContext';
import { redirect, usePathname, useRouter } from 'next/navigation';

function Navigation() {
  const { currentScreen, setCurrentScreen } = useContext(MyContext);
  const [ isAuthenticated, setIsAuthenticated ] = useState(true);
  const router = useRouter()
  
  const pathname = usePathname();

  useEffect(()=>{
    const isAuth = localStorage.getItem('isAuthenticated');
    if(!isAuth){
      redirect("/login");
    }
  }, [isAuthenticated])
  
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    redirect("/login");
  }

  return (
    <div id="dashboard-navigation" className='w-80 h-full bg-[#F1F2F7] border border-gray-300'>
      <div className="p-8 border-b border-b-gray-300">
        <Logo />
      </div>
      
      <div className="p-8 flex flex-col gap-12">
        <div>
          <h2 className='text-gray-500 my-2 text-xs font-semibold uppercase'>Menu</h2>
          <NavigationTab onClick={()=>{setCurrentScreen("HOME"); router.push('/dashboard')}} title='Dashboard' icon='dashboard-icon' tabActive={pathname === '/dashboard'} />
          <NavigationTab onClick={()=>{setCurrentScreen("ALERTS"); router.push('/dashboard/alerts')}} title='Alerts' icon='alerts-icon' tabActive={pathname === '/dashboard/alerts'} />
          <NavigationTab onClick={()=>{setCurrentScreen("LOGS"); router.push('/dashboard/logs')}} title='Logs' icon='logs-icon' tabActive={pathname === '/dashboard/logs'} />
          <NavigationTab onClick={()=>{setCurrentScreen("REFERRALS"); router.push('/dashboard/referrals')}} title='Referrals' icon='referrals-icon' tabActive={pathname === '/dashboard/referrals'} />
        </div>

        <div>
          <h2 className='text-gray-500 my-2 text-xs font-semibold uppercase'>Others</h2>
          <NavigationTab onClick={()=>{setCurrentScreen("SETTINGS"); router.push('/dashboard/settings')}} title='Settings' icon='settings-icon' tabActive={pathname === '/dashboard/settings'} />
          <NavigationTab onClick={()=>{setCurrentScreen("SUBSCRIPTION"); router.push('/dashboard/subscriptions')}} title='Subscription' icon='subscription-icon' tabActive={pathname === '/dashboard/subscriptions'} />
          <NavigationTab onClick={()=>handleLogout()} title='Signout' icon='signout-icon' tabActive={currentScreen === 'SIGNOUT'} />
        </div>
      </div>

    </div>
  )
}

export default Navigation
