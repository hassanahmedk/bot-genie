import Image from 'next/image'
import React from 'react'

function DashboardHeader() {
  return (
    <div id='dashboard-header' className='w-full border-b border-b-gray-300 flex justify-end py-4 px-14'>
      <div className="profile flex gap-4 items-center">
        <div className='relative overflow-hidden w-10 h-10 rounded-full'>
          <Image src={'/images/profile.jpg'} fill alt='profile-image' objectFit='cover' />
        </div>
        <div className='text-sm font-medium'>
          Ammar Memon
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader
