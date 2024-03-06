import Image from "next/image";
import React from "react";

function EmailVerified() {
  return (
    <div className="flexCenter flex-col p-12 text-center gap-4">
      <Image
        src={"/images/illustrations/verified.svg"}
        height={300}
        width={300}
        alt="verification-email-sent"
      />
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold text-primary-800 mt-4">Email Address Verified</h2>
        <p className="lg:px-12">
          Congratulations! <br /> Your account has been successfully created.
          <br />
          Please <a href="/login" className="text-primary-800 font-semibold">Login</a> to continue.
        </p>
      </div>
    </div>
  );
}

export default EmailVerified;
