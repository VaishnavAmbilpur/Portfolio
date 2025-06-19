import React from 'react'
import { HouseSimple,Info,AppWindow} from "@phosphor-icons/react";

const Hero = () => {
  return (
    <div className='backdrop-blur-1xl mt-10 ml-10 overflow-x-hidden text-amber-50 h-1-24 w-screen font-playfiar'>
        <div className='m-12 text-7xl tracking-tighter'>
            Vaishanv
            <div className='ml-2 text-2xl w-50 tracking-widest'>Developer</div>
        </div>
        
        <div className='flex mt-0'><div className="text-amber-50 flex flex-col gap-8 ml-14">
        <div className='flex gap-1'><HouseSimple size={25} weight="thin" /><span>Home</span></div>
        <div className='flex gap-1'><Info size={25} weight="thin" /><span>Info</span></div>
        <div className='flex gap-1'><AppWindow size={25} weight="thin" /><span>Projects</span></div>
        </div>
        <div></div>
        </div>
        
    </div> 
  )
}

export default Hero