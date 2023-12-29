'use client'
import Button from '@/components/shared/Button'
import Input from '@/components/shared/Input'
import Image from 'next/image'
import React from 'react'

function page() {

  const handleReferralClick = () => {

  }
   
  return (
    <div className='flexCenter flex-col gap-4'>
      <Image src={'/images/illustrations/referral.svg'} alt='illustration' width={320} height={320} />
      <h2 className="text-4xl text-primary-700 font-semibold my-4">
        Get 30% Off*
      </h2>
      <p className="opacity-80 ">Invite your friends and tell them to enter the code:</p>
      <h2 className="text-3xl font-semibold my-4 text-black">SDSD23G</h2>
      <p className="opacity-80 ">Or enter your friend&apos;s code here:</p>
      <Input type='number' name='referral-code' placeholder='Referral Code' />
      <Button title='Enter' type='primary' onClick={handleReferralClick} />
    </div>
  )
}

export default page
