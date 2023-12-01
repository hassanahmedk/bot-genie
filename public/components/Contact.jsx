'use client'
import React, { useState } from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa"
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted:', formData);

    setFormData({
      name: '',
      email: '',

    });
  };

  return (
    <div className='flex justify-center'>
      <div className='flex flex-col flex-1 items-center gap-12'>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-2'>
            <FaPhone /><p>+279 334 223 1</p></div>
          <div className='flex items-center gap-2'>
            <IoMdMail /><p>Jacob@fiverr.com</p></div>
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='mt-32 font-bold font-poppins text-xl'>Contact Us Here</h1>
          <div className="flex justify-center items-center gap-8">
            <FaInstagram className="text-2xl cursor-pointer " />
            <FaTwitter className="text-2xl cursor-pointe" />
            <FaLinkedin className="text-2xl cursor-pointer " />

          </div>
        </div>

      </div>
      <div className='flex-1'>
        <div className="flex">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-7 py-3 border rounded-2xl focus:outline-none focus:border-green-500 font-poppins"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="">
              <br></br>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-7 py-3 border rounded-2xl focus:outline-none focus:border-green-500 font-poppins"
                placeholder="Your Email"
                required
              />
            </div>
            <br></br>
            <button
              type='submit'
              className="bg-[#009379] text-white rounded-2xl px-10 py-3 text-center">
              Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
