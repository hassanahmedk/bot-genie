'use client'
import React, { useEffect, useState } from 'react'
import EditAlertForm from './EditAlertForm'

function EditAlert(props: any) {

  const [alertData, setAlertData] = useState();

  useEffect(()=>{
    setAlertData(props.alertData);
  }, [props.alertData])

  return (
    <div className='absolute w-screen h-screen left-0 top-0'>
      <EditAlertForm alertData={alertData} handleClose={props.onClose}/>
    </div>
  )
}

export default EditAlert
