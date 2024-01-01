"use client"
import React from "react";
import Image from "next/image";
import LoginForm from "@/components/Auth/LoginForm";
import Logo from "@/components/shared/Logo";
import { setIsAuthenticated } from "@/utils";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  const handleLoggedIn = (token:string) => {
    localStorage.setItem('token', token);
    localStorage.setItem('isAuthenticated', 'true');
    router.push("/dashboard");
  }

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
            Don&apos;t have an account? <a href="signup" className="text-primary-500 hover:text-primary-200">Sign Up</a>
          </div>
        </div>
        <div className="my-36">
          <LoginForm handleLoggedIn={handleLoggedIn} />
        </div>
      </div>

      <div id="login-right" className="w-full h-full overflow-hidden">
        <div
          className="w-full h-full relative "
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

export default Page;
