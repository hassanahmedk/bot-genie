"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

function Page() {
  const searchParams = useSearchParams();
  
  const submitToken = async (token: string | null) => {
    try {
      const response = await fetch('/api/signup/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token:token }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    const token = searchParams.get('token');
    submitToken(token);
  }, [])

  return (
    <div className="flexCenter flex-col h-[90vh] p-12 text-center gap-8">
      <Image
        src={"/images/illustrations/verified.svg"}
        height={300}
        width={300}
        alt="verification-email-sent"
      />
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-semibold text-primary-800 mt-4">
          Email Address Verified
        </h2>
        <p className="lg:px-12 mb-2 italic">
          {/* <span className="text-2xl font-semibold text-primary-600">Congratulations!</span> 
          <br /> */}
          Your account has been successfully created.
        </p>
        <p className="lg:px-12">
          Please {" "}
          <a href="/login" className="text-primary-800 font-semibold">
            Login
          </a>{" "}
          to continue.
        </p>
      </div>
    </div>
  );
}

export default Page;
