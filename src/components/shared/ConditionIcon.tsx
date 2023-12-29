import Image from 'next/image';
import React from 'react'

function ConditionIcon(props:{condition:string}) {

  if(props.condition === 'grossing-up'){
    return <Image src={`/images/grossing-up.svg`} width={20} height={20} alt="alert-icon" />
  } else {
    return <Image src={`/images/grossing-up.svg`} width={20} height={20} alt="alert-icon" />
  }
}

export default ConditionIcon
