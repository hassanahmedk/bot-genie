"use client"
import React, {useState} from 'react'
import Logo from '../shared/Logo'
import NavigationTab from './InnerComponents/NavigationTab'

function Navigation() {
  const [activeTab, setActiveTab] = useState<string>('dashboard')
  return (
    <div id="dashboard-navigation" className='w-80 h-full bg-[#F1F2F7] shadow-md'>
      <div className="p-8 border-b border-b-gray-300">
        <Logo />
      </div>
      
      <div className="p-8 flex flex-col gap-12">
        <div>
          <h2 className='text-gray-500 my-2 text-xs font-semibold uppercase'>Menu</h2>
          <NavigationTab title='Dashboard' icon='dashboard-icon' tabActive={true} />
          <NavigationTab title='Alerts' icon='alerts-icon' />
          <NavigationTab title='Logs' icon='logs-icon' />
          <NavigationTab title='Referrals' icon='referrals-icon' />
        </div>

        <div>
          <h2 className='text-gray-500 my-2 text-xs font-semibold uppercase'>Others</h2>
          <NavigationTab title='Settings' icon='settings-icon' />
          <NavigationTab title='Subscription' icon='subscription-icon' />
          <NavigationTab title='Signout' icon='signout-icon' />
        </div>
      </div>

    </div>
  )
}

export default Navigation
