'use client'
import React, { useLayoutEffect, useState } from "react";
import Image from "next/image";
import SignupForm from "@/components/Auth/SignupForm";
import Logo from "@/components/shared/Logo";
import EmailSent from "@/components/Auth/EmailSent";
import { redirect } from "next/navigation";

function Page() {
  const [email, setEmail] = useState<string>('');
  const [emailSent, setEmailSent] = useState<boolean>(false);

  const handleAccountCreated = () => {
    setEmailSent(true);
  }

  useLayoutEffect(() => {
    const isAuth = localStorage.getItem('isAuthenticated');
    if(isAuth){
      redirect("/dashboard");
    }
  }, []);

  return (
    <div className="flex h-screen w-screen bg-white">
      <div id="signup-left" className="w-full h-full overflow-hidden">
        <div className="w-full h-full relative ">
          <Image
            src={"/images/signup-bg.jpg"}
            alt="signup-pic"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div
        id="signup-right"
        className={`w-full h-full 
          bg-white text-black
          flex items-center flex-col 
        `}
      >
        <div
          id="signup-right-top"
          className="p-12 w-full flex items-center justify-between"
        >
          <Logo />
          <div>
            Have an account? {" "}
            <a href="/login" className="text-primary-500 hover:text-primary-200">
            Login
            </a>
          </div>
        </div>
        <div className="my-16">
          {
            emailSent
            ? <EmailSent email={email} />
            : <SignupForm 
              setEmail={setEmail} 
              setEmailSent={setEmailSent} 
              handleAccountCreated={handleAccountCreated}
            /> 
          }
        </div>
      </div>
    </div>
  );
}

export default Page;
