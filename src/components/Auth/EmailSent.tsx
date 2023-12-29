import Image from "next/image";
import React from "react";

function EmailSent() {
  return (
    <div className="flexCenter flex-col p-12 text-center gap-4">
      <Image
        src={"/images/illustrations/email_sent.svg"}
        height={300}
        width={300}
        alt="verification-email-sent"
      />
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold text-primary-800 mt-4">Verification Email Sent</h2>
        <p className="lg:px-12">
          Please check your email <span className="font-semibold">(ihassanahmedkhan@gmail.com)</span> and click on the
          given link to verify your account.
        </p>
      </div>
    </div>
  );
}

export default EmailSent;
