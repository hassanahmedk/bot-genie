import React from 'react'
import DashboardStatCard from './InnerComponents/DashboardStatCard'

function DashboardStats(props:any) {
  return (
    <div className='flex gap-4 flex-wrap'>
      {props.stats.map((stat:any, index:number )=>{
        return(
          <DashboardStatCard
            key={index}
            title={stat.title}
            value={stat.value}
            bg={stat.bg}
            color={stat.color}
          />
        );
      })}
    </div>
  )
}

export default DashboardStats

