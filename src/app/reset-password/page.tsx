"use client"
import React, { useLayoutEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/components/shared/Logo";
import { useRouter } from "next/navigation";
import ResetPasswordForm from "@/components/Auth/ResetPasswordForm";
import { useSearchParams } from "next/navigation";
import { ERROR_REASONS } from "@/utils";
import Link from "next/link";


function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [success, setSuccess] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const resetPassword = async (token: string | null, password: string | null) => {
    try {
      const response = await fetch('/api/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ resetToken:token, newPassword: password }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  useLayoutEffect(()=>{
    const token = searchParams.get('token');
    if(!token){
      router.push("/login");
    }
  })
  
  const handleResetPassword = async (data: any) => {
    const token = searchParams.get('token');
    setError("");
    try{
      const response:any = await resetPassword(token, data.password);
      console.log(response);
      if(response?.error){
        setError("* Something went wrong. Please try again.");
        setLoading(false);
        return;
      } 

      if(response?.success){
        setSuccess(true);
        setLoading(false);
      }
    } catch(e) {
      console.log(e);
      setLoading(false);
    }
  }

  if(success){
    return(
      <div className="flex h-screen w-screen bg-white">
      <div 
        id="login-left" 
        className={
          `w-full h-full 
          bg-white text-black
          flex items-center flex-col 
        `}>

        <div id="login-right-top" className="p-12 w-full flex items-center justify-between">
          <Logo />
          <div>
            {/* Don&apos;t have an account? <a href="signup" className="text-primary-500 hover:text-primary-200">Sign Up</a> */}
          </div>
        </div>
        
        <Image
      src={"/images/illustrations/email_sent.svg"}
        height={300}
        width={300}
        className="mt-12"
        alt="password-reset-done"
      />
        <div className="my-12 text-lg">
          Your password has been reset. Please <Link className="text-primary-700 font-medium" href={'/login'}>Login</Link> to continue.
        </div>
      </div>

      <div id="login-right" className="w-full h-full overflow-hidden">
        <div
          className="w-full h-full relative"
        >
          <Image
            src={"/images/login-bg.png"}
            alt="login-pic"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
    );
  } else {
    return (
      <div className="flex h-screen w-screen bg-white">
        <div 
          id="login-left" 
          className={
            `w-full h-full 
            bg-white text-black
            flex items-center flex-col 
          `}>
  
          <div id="login-right-top" className="p-12 w-full flex items-center justify-between">
            <Logo />
            <div>
              {/* Don&apos;t have an account? <a href="signup" className="text-primary-500 hover:text-primary-200">Sign Up</a> */}
            </div>
          </div>
          <div className="my-36">
            <ResetPasswordForm handleResetPassword={handleResetPassword} error={error} />
          </div>
        </div>
  
        <div id="login-right" className="w-full h-full overflow-hidden">
          <div
            className="w-full h-full relative"
          >
            <Image
              src={"/images/login-bg.png"}
              alt="login-pic"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    );
  }

}

export default Page;
