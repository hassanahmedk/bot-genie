import React, { useState } from 'react'
import Input from '../shared/Input'
import Button from '../shared/Button'
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { ERROR_REASONS, emailRegex } from '@/utils';

function ForgotPassword(props:any) {

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState('');
  
  const resetPasswordRequest = async () => {
    try {
      const response = await fetch('/api/reset-password/reset-password-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email}),
      });
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async function handleSubmit() {
    setLoading(true);

    let emailValid = email.toLowerCase().match(emailRegex);
    
    if(!emailValid || !email.length){
      setError("* Please enter a valid email address.");
      setLoading(false);
      return;
    }
    try{
      const response:any = await resetPasswordRequest();
      if(response?.error && response?.reason === ERROR_REASONS.notExist){
        setError("* Email doesn't exist. Please sign up."); 
        setLoading(false);
        return;
      } else if(response?.error){
        setError("* Something went wrong. Please try again.");
        setLoading(false);
        return;
      }

      if(response?.success){
        setEmailSent(true);
        setLoading(false);
      }
    } catch(e) {
      console.log(e);
      setLoading(false);
    }
    setLoading(false);
  }

  const onChange = (event:any) => {
    setEmail(event.target.value);
  }

  if(emailSent){
    return(
      <div className='fixed h-screen w-screen top-0 left-0 bg-[rgba(0,0,0,0.4)] flex items-center justify-center z-10'>
      <div className="relative rounded bg-white h-[18rem] lg:w-[45rem] w-[12rem] flex flex-col justify-center items-center">

      <div className='p-4 flex items-center justify-center flex-col gap-4 text-lg'>
          <CheckIcon style={{fontSize:"4rem"}} />
          <p>
          Link to reset your password has been sent to your email address.
          </p>
      </div>

        <div onClick={props.handleClose} className='absolute top-2 right-2 cursor-pointer'>
          <CloseIcon />
        </div>
      </div>
    </div>
    )
  }

  return (
    <div className='fixed h-screen w-screen top-0 left-0 bg-[rgba(0,0,0,0.4)] flex items-center justify-center z-10'>
      <div className="relative rounded bg-white h-[18rem] w-[35rem] flex flex-col justify-center items-center">
      <div id="reset-password-form-headings" className="flex flex-col gap-4 mb-8">
        <h1 className="text-3xl font-bold text-primary-700">Reset your password</h1>
        <h3 className="text-md">Enter email address associated with your <span className="text-primary-600"> BotGenie</span> account</h3>
      </div>
      <Input
          placeholder="Email"
          type="email"
          name="email"
          value={email}
          onChange={onChange}
        />
       <p className="mt-2 text-red-600">{error}</p>
        <Button
          title="Send Verification Email"
          type="primary"
          size="lg"
          onClick={handleSubmit}
          disabled={loading}
          className="mt-4 mb-2 text-sm py-2"
        />
        <div onClick={props.handleClose} className='absolute top-2 right-2 cursor-pointer'>
          <CloseIcon />
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
