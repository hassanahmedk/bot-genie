import React from 'react'
import ArrowRight from "public/assessts/ArrowRight.png"

const Blogpost = (props) => {
    const {title,image,link,content}=props.data;
   
  return (
   <div className='flex '>
    <div className="flex flex-col bg-[#FFFFFF]  gap-8 border rounded-3xl shadow-md">
            <div className="w-full h-64 object-cover"><img className='object-cover w-full' src={image}></img></div>
            <h1 className="text-2xl font-popppins font-bold px-10">{title}</h1>
            <p className="text-sm font-Mulish font-normal px-10">{content}</p>
            <a href={link} className="py-8 flex gap-2 items-center text-sm px-10 font-poppins font-extrabold text-center">Read More<span><img src={"/images/ArrowRight.png"}></img></span></a>
          </div>

   </div>
  )
}

export default Blogpost
