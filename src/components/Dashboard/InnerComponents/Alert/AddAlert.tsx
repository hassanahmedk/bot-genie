import React from 'react'
import AddAlertForm from './AddAlertForm'

function AddAlert(props: any) {
  return (
    <div className='absolute w-screen h-screen left-0 top-0'>
      <AddAlertForm handleClose={props.handleClose}/>
    </div>
  )
}

export default AddAlert
