import Image from 'next/image'
import React from 'react'

function Logo() {
  return (

    <div>
      <Image src={'/images/logo.png'} alt='logo' width={120} height={120}/>
    </div>
  )
}

export default Logo
