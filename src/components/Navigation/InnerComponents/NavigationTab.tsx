"use client"
import React, { useEffect, useState } from 'react'
import { NavigationTabProps } from '@/interface/interface'
import Image from 'next/image';

const NavigationTab: React.FC<NavigationTabProps> = ({
  title, icon, tabActive = false, 
}) => {

  const [active, setActive] = useState<boolean>(false);
  
  useEffect(()=>{
    setActive(tabActive);
  }, [tabActive])

  return (
    <div className={
      `p-4 rounded text-sm font-semibold flex gap-4 cursor-pointer
      ${tabActive ? 'bg-[#D9E9EB] text-primary-500 opacity-100' : 'text-[#273240] opacity-60'}
      `}>
        <Image src={`/images/icons/navigation/dashboard-${tabActive ? 'active' : 'inactive'}.svg`} height={20} width={20} alt="navigation-icon" />
      {title}
    </div>
  );
}

export default NavigationTab
