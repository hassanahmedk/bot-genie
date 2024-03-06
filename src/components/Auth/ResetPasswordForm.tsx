"use client";
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";
import Input from "../shared/Input";
import Button from "../shared/Button";
import { ERROR_REASONS, emailRegex } from '@/utils';


function ResetPassword(props:any) {
  const router = useRouter()
  const [loginData, setLoginData] = useState({ confirmPassword: "", password: "" });
  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(false);

  const onChange = (event: { target: { name: string; value: string } }) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  useEffect(()=>{
    setLoginData(props?.error);
  }, [props?.error])

  const handleSubmit = async () => {
    setLoading(true);
    setLoginError("");
    
    let emptyValues = Object.values(loginData).some((value) => value=="");

    if(emptyValues){
      setLoginError("* Please fill in all the fields.");
      setLoading(false);
      return;
    }

    props.handleResetPassword(loginData);

  };

  return (
    <div className="flexCenter flex-col text-center gap-12">
      <div id="login-form-headings" className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Reset Your Password</h1>
        <h3 className="text-md">Enter a new password</h3>
      </div>
      <div id="login-form" className="flexCenter flex-col gap-4">
        <Input
          placeholder="Password"
          type="password"
          name="password"
          value={loginData.password}
          onChange={onChange}
        />
        <Input
          placeholder="Confirm Password"
          type="password"
          name="confirmPassword"
          value={loginData.confirmPassword}
          onChange={onChange}
        />
        <p className="mt-2 text-red-600 self-start">{loginError}</p>
        <Button
          title="Reset Password"
          type="primary"
          size="lg"
          onClick={handleSubmit}
          disabled={loading}
          className="mt-4"
        />
      </div>
    </div>
  );
}

export default ResetPassword;
