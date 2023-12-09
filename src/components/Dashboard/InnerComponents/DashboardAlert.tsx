"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";

function DashboardAlert({
  title,
  condition,
  currency,
  price,
  trigger,
  expiresOn,
}: {
  title: string;
  condition: string;
  currency: string;
  price: string;
  trigger: string;
  expiresOn: string;
}) {

  const [icon, setIcon] = useState<string>('');
  useEffect(()=>{
    if(condition === 'grossing-up'){
      setIcon('grossing-up.svg');
    } else {
      setIcon('grossing-down.svg');
    }
  }, [condition]);

  return (
    <div className="flex justify-between items-center gap-2 bg-gray-100 border rounded border-grayBorder px-4 py-2">
      <div className="flex flex-col w-full gap-2">
        <div>{title}</div>

        <div className="opacity-75 text-sm flex justify-between w-full">
          <div className="flex gap-2">
            <Image src={`/images/${icon}`} width={20} height={20} alt="alert-icon" />
            <div className="font-bold">
              {currency} - 
            </div>
            <div className="font-semibold">
              {price} - 
            </div>
            <div className="opacity-80">
              {trigger} 
            </div>
          </div>

          <div className="italic">
            Expires {expiresOn}
          </div>
        </div>

      </div>

    </div>
  );
}

export default DashboardAlert;
