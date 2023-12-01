import Logo from "public/assessts/Logo.png"
import RocketLaunch from "public/assessts/RocketLaunch.png"
import Visuals from "public/assessts/Visuals.png"
import Icon from "public/assessts/Icon.png"
import Icon1 from "public/assessts/Icon1.png"
import Icon2 from "public/assessts/Icon2.png"
import ArrowRight from "public/assessts/ArrowRight.png"
import Blogpost from "public/components/Blogpost.jsx"
import { Blogg } from "public/components/Blog.jsx"
import Contact from "public/components/Contact.jsx"
import Footer from "public/components/Footer.jsx"

export default function Home() {
  return (
    <main className="px-4 py-5 sm:px-12">
      {/* Header */}
      <div className="flex justify-between items-center ">
        <img className="logo" src={Logo} ></img>
        <div className="flex items-center justify-between gap-12 font-poppins text-xl font-bold text-[#009379]">
          <button>Contact</button>
          <button className="bg-[#E5F4F2] rounded-2xl px-12 py-4 text-center">Go to the dashboard</button>
          <button className="flex items-center gap-5 bg-[#009379] text-white rounded-2xl px-12 py-4 text-center">
            <img src={RocketLaunch}></img> Get started</button>
        </div>
      </div>
      {/* Hero */}
      <div className="flex py-28  ">
        <div className="flex flex-1 flex-col gap-6">
          <p className="font-poppins font-extrabold text-6xl leading-snug">Lorem Ipsum Sit amet Condor</p>
          <p className="text-lg leading-snug">Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor</p>
          <div className="flex gap-4">
            <button className="flex items-center gap-5 bg-[#009379] text-white rounded-2xl text-sm px-7 py-3">
              <img src={RocketLaunch}></img> Get started</button>
            <button className="border-[#009379] border-2 rounded-2xl text-[#009379] font-bold text-sm px-7 py-3">How it Works</button>
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <img className="h-full w-full" src={Visuals}></img>
        </div>
      </div>
      {/* Features */}
      <div>
        <div className="flex flex-col justify-center items-center gap-5 py-28">
          <h1 className="font-poppins font-extrabold text-3xl text-center">Features</h1>
          <p className="font-poppins text-lg text-center">Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor</p>
        </div>
        <div className="flex gap-8 justify-between ">
          <div className="flex flex-col justify-center items-center bg-[#FFFFFF] px-10 py-8 gap-8 border rounded-3xl shadow-md">
            <div className="rounded-2xl bg-[#FF625033] p-5"><img className="w-10 h-10" src={Icon}></img></div>
            <h1 className="text-3xl text-center font-popppins font-extrabold">Lorem Ipsum</h1>
            <p className="text-lg font-Mulish font-normal text-center">Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor</p>
            <button className="flex gap-2 items-center justify-center text-lg font-poppins font-extrabold text-[#009379] text-center">Learn More<img src={ArrowRight}></img></button>
          </div>

          <div className="flex flex-col justify-center items-center bg-[#FFFFFF] px-10 py-8 gap-8 border rounded-3xl shadow-md">
            <div className="rounded-2xl bg-[#00937933] p-5"><img className="w-10 h-10" src={Icon1}></img></div>
            <h1 className="text-3xl text-center font-popppins font-extrabold">Lorem Ipsum</h1>
            <p className="text-lg font-Mulish font-normal text-center">Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor</p>
            <button className="flex gap-2 items-center justify-center text-lg font-poppins font-extrabold text-[#009379] text-center">Learn More<img src={ArrowRight}></img></button>
          </div>
          <div className="flex flex-col justify-center items-center bg-[#FFFFFF] px-10 py-8 gap-8 border rounded-3xl shadow-md">
            <div className="rounded-2xl bg-[#F8D57E33] p-5"><img className="w-10 h-10" src={Icon2}></img></div>
            <h1 className="text-3xl text-center font-popppins font-extrabold">Lorem Ipsum</h1>
            <p className="text-lg font-Mulish font-normal text-center">c amet Condor Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor</p>
            <button className="flex gap-2 items-center justify-center text-lg font-poppins font-extrabold text-[#009379] text-center">Learn More<img src={ArrowRight}></img></button>
          </div>
        </div>
      </div>
      {/* Matric */}
      <div>
        <div className="flex flex-col justify-center items-center gap-5 py-28">
          <h1 className="font-poppins font-extrabold text-3xl text-center">Matric</h1>
          <p className="font-poppins text-lg text-center">Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor</p>
        </div>

        <div className="flex justify-center items-center gap-12">
          <div className="flex flex-col justify-center items-center bg-[#FFFFFF] px-14 py-8 gap-2 rounded-tl-3xl rounded-tr-lg  border-b-4 border-green-800 shadow-md">
            <h1 className="text-3xl text-center font-popppins font-extrabold">10k+</h1>
            <p className="text-lg font-Mulish font-normal text-center">Lorem Ispum</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-[#FFFFFF] px-14 py-8 gap-2 rounded-tl-3xl rounded-tr-lg  border-b-4 border-green-800 shadow-md">
            <h1 className="text-3xl text-center font-popppins font-extrabold">10k+</h1>
            <p className="text-lg font-Mulish font-normal text-center">Lorem Ispum</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-[#FFFFFF] px-14 py-8 gap-2 rounded-tl-3xl rounded-tr-lg  border-b-4 border-green-800 shadow-md">
            <h1 className="text-3xl text-center font-popppins font-extrabold">10k+</h1>
            <p className="text-lg font-Mulish font-normal text-center">Lorem Ispum</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-[#FFFFFF] px-14 py-8 gap-2 rounded-tl-3xl rounded-tr-lg  border-b-4 border-green-800 shadow-md">
            <h1 className="text-3xl text-center font-popppins font-extrabold">10k+</h1>
            <p className="text-lg font-Mulish font-normal text-center">Lorem Ispum</p>
          </div>
        </div>
      </div>
      {/* Price plans */}
      <div className="py-28">
        <div className="flex flex-col justify-center items-center gap-10">
          <h1 className="font-poppins font-extrabold text-3xl text-center">Pick Your Perfect Plan</h1>
          <p className="font-poppins text-lg text-center">Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor</p>
        </div>
        {/* prics */}
        <div className="flex justify-evenly items-center  bg-gray-100">
          {/* Pricing Card 1 */}
          <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden m-4">
            <div className="bg-[#F8D57E33] text-[#b48611df] p-6">
              <h2 className="text-xl font-extrabold">Basic Plan</h2>
              <p>For individuals</p>
            </div>
            <div className="p-6">
              <p className="text-3xl font-poppins font-extrabold">$9.99 <span className="text-sm font-poppins font-normal">/month</span></p>
              <ul className="mt-4">
                <li>Access to basic features</li>
                <li>Email support</li>

              </ul>
              <button className="mt-6 bg-[#F8D57E33] text-[#b48611df] font-bold py-3 px-20 rounded-full items-center ">
                Get Started
              </button>
            </div>
          </div>

          {/* Pricing Card 2 */}
          <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden m-4">
            <div className="bg-[#eaf4e5] text-[#2b802b] p-6">
              <h2 className="text-xl font-extrabold">Pro Plan</h2>
              <p>For businesses</p>
            </div>
            <div className="p-6">

              <p className="text-3xl font-poppins font-extrabold">$19.99 <span className="text-sm font-poppins font-normal">/month</span></p>
              <ul className="mt-4">
                <li>Access to pro features</li>
                <li>Priority email support</li>
              </ul>
              <button className="mt-6 bg-[#eaf4e5] text-[#2b802b] font-bold py-3 px-20 rounded-full items-center ">
                Get Started
              </button>
            </div>
          </div>

          {/* Pricing Card 3 */}
          <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden m-4">
            <div className="bg-[#00937933] text-[#009378]  p-6">
              <h2 className="text-xl font-extrabold">Premium Plan</h2>
              <p>For advanced users</p>
            </div>
            <div className="p-6">

              <p className="text-3xl font-poppins font-extrabold">$29.99 <span className="text-sm font-poppins font-normal">/month</span></p>
              <ul className="mt-4">
                <li>Access to premium features</li>
                <li>24/7 customer support</li>
              </ul>
              <button className="mt-6 bg-[#00937933]  text-[#009378] font-bold py-3 px-20 rounded-full items-center ">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Blog */}
      <div>
        <div className="flex flex-col justify-center items-center gap-10">
          <h1 className="font-poppins font-extrabold text-3xl text-center">Blogs</h1>
          <p className="font-poppins text-lg text-center">Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor</p>
        </div>
        <div className="flex justify-between py-28 gap-4">
          {Blogg.map((a) => (
            <Blogpost data={a} />

          ))}</div>

      </div>
      {/* Contact */}
      <div className="bg-[#FFFFFF] rounded-md">
      <div className="flex flex-col justify-center items-center gap-10 py-14">
          <h1 className="font-poppins font-extrabold text-3xl text-center">Blogs</h1>
          <p className="font-poppins text-lg text-center">Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor Lorem Ipsum Sit amet Condor</p>
        </div>
        <Contact />
      </div>
      {/* Footer */}
      <div className="mt-16">
        <Footer/>
      </div>

    </main>
  )
}
