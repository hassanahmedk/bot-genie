import  Logo  from "public/assessts/Logo.png"
import  RocketLaunch  from "public/assessts/RocketLaunch.png"
import Visuals from "public/assessts/Visuals.png"

export default function Home() {
  return (
    <main>
      {/* Header */}
      <div className="flex justify-between items-center px-12 py-5">
        <img className="logo" src={Logo} ></img>
        <div className="flex items-center justify-between gap-12 font-poppins text-xl font-bold text-[#009379]">
          <button>Contact</button>
          <button className="bg-[#E5F4F2] rounded-2xl px-12 py-4">Go to the dashboard</button>
          <button className="flex items-center gap-5 bg-[#009379] text-white rounded-2xl px-12 py-4">
            <img src={RocketLaunch}></img> Get started</button>
        </div>
      </div>
      {/* Hero */}
      <div className="flex px-14 py-28 gap-6">
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
    </main>
  )
}
