'use client'
import Button from '@/components/shared/Button'
import Input from '@/components/shared/Input'
import Image from 'next/image'
import React from 'react'
import CheckIcon from '@mui/icons-material/Check';

function page() {

  const handleReferralClick = () => {

  }
   
  return (
    <div className='flexCenter flex-col gap-4'>
      <Image src={'/images/illustrations/verified.svg'} alt='illustration' width={320} height={320} />
      <h2 className="text-4xl text-primary-700 font-bold my-4">
        Pro Plan
      </h2>
      <p className="opacity-80 ">You are subscribed to <span className='font-semibold text-primary-800'>Pro Plan</span> and can enjoy extra benefits.</p>
      <div className="flex flex-col gap-2 mb-8">
        <div className="italic opacity-60"> <CheckIcon/> Enter Benefit No 1 of Pro Plan</div>
        <div className="italic opacity-60"> <CheckIcon/> Enter Benefit No 2 of Pro Plan</div>
        <div className="italic opacity-60"> <CheckIcon/> Enter Benefit No 3 of Pro Plan</div>
      </div>
      <Button title='Renew Subscription' type='primary' onClick={handleReferralClick} />
      <p className="opacity-80 italic mt-4">Expiring on 31 January 2024</p>
    </div>
  )
}

export default page
