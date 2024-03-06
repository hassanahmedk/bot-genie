"use client";
import { useRouter } from 'next/navigation'
import { useState } from "react";
import Input from "../shared/Input";
import Button from "../shared/Button";
import { ERROR_REASONS, emailRegex } from '@/utils';
import ForgotPassword from './ForgotPasswordPopup';


function LoginForm(props:any) {
  const router = useRouter()
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(false);
  const [forgetPasswordDialog, setForgetPasswordDialog] = useState(false);

  const onChange = (event: { target: { name: string; value: string } }) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  const loginAccount = async () => {
    try {
      const response = await fetch('/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  const handleSubmit = async () => {
    setLoading(true);
    setLoginError("");
    
    let emptyValues = Object.values(loginData).some((value) => value=="");
    let emailValid = loginData.email.toLowerCase().match(emailRegex);
    
    if(emptyValues){
      setLoginError("* Please fill in all the fields.");
      setLoading(false);
      return;
    }

    if(!emailValid){
      setLoginError("* Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try{
      const response:any = await loginAccount();
      console.log(response);
      if(response?.error && response?.reason && response?.reason === ERROR_REASONS.invalidData){
        setLoginError("* Invalid email address or password");
        setLoading(false);
        return;
      } else if(response?.error && response?.reason && response?.reason === ERROR_REASONS.notVerified){
        setLoginError("* Email Address is not verified");
        setLoading(false);
        return;
      } else if(response?.error){
        setLoginError("* Something went wrong. Please try again.");
        setLoading(false);
        return;
      }

      if(response?.success){
        props.handleLoggedIn(response?.token);
        setLoading(false);
      }
    } catch(e) {
      console.log(e);
      setLoading(false);
    }
  };

  return (
    <div className="flexCenter flex-col text-center gap-12">
      <div id="login-form-headings" className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-primary-500">Welcome Back</h1>
        <h3 className="text-md">Login into your account</h3>
      </div>
      <div id="login-form" className="flexCenter flex-col gap-4">
        <Input
          placeholder="Email"
          type="email"
          name="email"
          value={loginData.email}
          onChange={onChange}
        />
        <Input
          placeholder="Password"
          type="password"
          name="password"
          value={loginData.password}
          onChange={onChange}
        />
        <p className='self-start text-primary-600 cursor-pointer' onClick={()=>setForgetPasswordDialog(true)}>Forgot Password?</p>
        <p className="mt-2 text-red-600 self-start">{loginError}</p>
        <Button
          title="Login"
          type="primary"
          size="lg"
          onClick={handleSubmit}
          disabled={loading}
          className="mt-4"
        />
      </div>
      {
        forgetPasswordDialog && <ForgotPassword handleClose={()=> setForgetPasswordDialog(false)}/>
      }
    </div>
  );
}

export default LoginForm;
