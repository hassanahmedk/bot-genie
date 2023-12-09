import React from 'react'

function DashboardLog({title, time}: {title:string, time:string}) {
  return (
    <div className='flex justify-between items-center gap-2 bg-gray-100 border rounded border-grayBorder px-4 py-2'>
      <div className="flex flex-col">
        <div>{title}</div>
        <div className='opacity-75 text-xs'>{time}</div>
      </div>
      <div className='text-xs text-primary-500 capitalize font-semibold cursor-pointer'>
        View
      </div>
    </div>
  )
}

export default DashboardLog
