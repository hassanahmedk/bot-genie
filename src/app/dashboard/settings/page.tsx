"use client";
import Button from "@/components/shared/Button";
import Input from "@/components/shared/Input";
import { Checkbox, FormControl } from "@mui/material";
import Image from "next/image";
import React from "react";

function page() {
  const handleUpdateProfile = () => {};
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="flexCenter flex-col">
      <div className="text-sm opacity-75 mb-4">Profile Picture</div>
      <div className="rounded-full h-44 w-44 relative overflow-hidden">
        <div className="h-full w-full bg-green-900 cursor-pointer opacity-0 hover:opacity-80 absolute top-0 left-0 z-10 flexCenter text-fullWhite transition-all">
          Upload Profile Picture
        </div>
        <Image
          src={"/images/profile.jpg"}
          fill
          objectFit="cover"
          alt="profile-image"
        />
      </div>
      <p className="text-xs opacity-80 my-2">Supports .png, .jpg</p>
      <div className="mt-8 flex flex-col gap-4">
        <div>
          <div className="text-sm mb-1 opacity-75">Name</div>
          <Input
            name="name"
            type="name"
            placeholder="Name"
            value="Lorem Ipsum"
          />
        </div>
        <div>
          <div className="text-sm mb-1 opacity-75">Email Address</div>
          <Input
            name="name"
            type="name"
            placeholder="Name"
            value="lorem@ipsum.com"
          />
        </div>
        <div>
          <div className="text-sm mb-1 opacity-75">Telegram ID</div>
          <Input
            name="name"
            type="name"
            placeholder="Name"
            value="@LoremIpsum"
          />
        </div>
        <div>
          <div className="flex items-center text-sm opacity-90">
            <Checkbox {...label} /> Receive Alert Email Notification
          </div>
          <div className="flex items-center text-sm opacity-90">
            <Checkbox {...label} /> Receive Alert Telegram Notification
          </div>
        </div>
      </div>
      <Button
        title="Update"
        type="primary"
        onClick={handleUpdateProfile}
        className="mt-8"
      />
    </div>
  );
}

export default page;
