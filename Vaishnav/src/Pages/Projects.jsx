import React from 'react'
import { HouseSimple,Info,AppWindow} from "@phosphor-icons/react";
import gsap from 'gsap'
import {useGSAP} from "@gsap/react"
import { SiCodeforces } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { SiGoogledocs } from "react-icons/si";
    import { Link } from "react-router-dom";
    import "../Componets/Hero.css"

const Projects = () => {
    
  useGSAP(()=>{
     gsap.fromTo('.con',{
        x:0,
        delay: 0.6,
        opacity : 0,
        ease : "bounce.in",
        scrub : true,
        duration: 0
     },{
      x:0,
      ease : "circ.in",
      opacity : 1,
      srub : true,
      duration : 0.3
     })
  })
  
  useGSAP(()=>{
     gsap.fromTo('#h',{
        x:0,
        delay: 0.6,
        opacity : 0,
        ease : "bounce.in",
        scrub : true,
        duration: 0
     },{
      x:0,
      ease : "circ.in",
      opacity : 1,
      srub : true,
      duration : 0.3
     })
  })
  useGSAP(()=>{
     gsap.fromTo('.me',{
        x:0,
        delay: 0.6,
        opacity : 0,
        ease : "bounce.in",
        scrub : true,
        duration: 0
     },{
      x:0,
      ease : "circ.in",
      opacity : 1,
      srub : true,
      duration : 0.3
     })
  },[])
  return (
    <div className='backdrop-blur-1xl my-10 p-3 overflow-x-hidden text-white h-1-24 w-screen font-playfiar items-start md:mx-10  md:pl-25'>
        <div className='m-7 text-5xl  md:text-7xl tracking-widest'>
           <span className='min-h-fit min-w-fit animate gradient'><span className=''>Vaishnav</span></span>
            
            <div className='me'> <div className='font-sans font-extralight m-2 text-sm w-fit tracking-widest transition delay-100 duration-300 md:text-sm text-red-50'>Developer & Problem Solver</div>
        </div>
           </div>
        
        <div className="md:flex flex-row " id='h'>
           <div className='flex mt-0 mx-8 md:mt-4'><div className="text-red-50 flex flex-row gap-8 mt-5 md:flex-col">
              <div className='flex gap-1 items-center'><Link to="/"><HouseSimple size={`19`} weight="thin" /></Link><span>Home</span></div>
              <div className='flex gap-1 items-center'><Link to="/TechStack"><Info size={19} weight="thin" /></Link><span>Info</span></div>
              <div className='flex gap-1 items-center'><Link to="/Projects"><AppWindow size={19} weight="thin" /></Link><span>Projects</span></div>
           </div>
        </div>
          <div className='w-100 text-sm mx-2 p-3 mt-10 break flex justify-items-start flex-col md:min-w-250  gap-4 md:mt-3 md:mx-30 text-red-50'>
                            <span className='con justify-start ml-2'><span className=' text-2xl md:text-4xl mb-7'>Projects</span></span>
                            <span className='con m-1 flex justify-start'><span className='p-2 text-left md:text-xl w-200 tracking-wide leading-8'>I build web applications and solve problems every day. But when my code has more bugs than features and my patience hits O(n²) complexity, I know it's time to step away—whether that means mindless scrolling or briefly pretending I'm not a developer at all.
                            </span></span>
                                
                                  <div className='min-h-fit w-80 mx-3 md:min-200 flex flex-row gap-4 items-center '>
                                    <button className='p-2 hover:bg-zinc-800 rounded-lg transition-all'><Link to="/codeforces"><SiCodeforces size={22}/></Link></button>
                  <button className='p-2 hover:bg-zinc-800 rounded-lg transition-all'><Link to="/codeforces"><SiLeetcode size={22}/></Link></button>
                  <button className='p-2 hover:bg-zinc-800 rounded-lg transition all'><Link to="/codeforces"><FiGithub size={22}/></Link></button>
                  <button className='p-2 hover:bg-zinc-800 rounded-lg transition-all'><Link to="/codeforces"><SiGoogledocs size={22}/></Link></button>
                                  </div>
                                    <div className='min-h-0.5 w-80 mx-3 md:min-200 bg-amber-50'></div>  
                            <div className='min-h-0.5 w-80 mx-3 md:min-200 font-sans font-extralight text-xs tracking-widest'>
                              <div className='my-3 font-extrabold font-geo md:text-xl'>Connect with Me</div>
                              <a href="vaishnavambilpur2006@gmail.com" className='font-sans font-extralight'>vaishnavambilpur2006@gmail.com</a>
                            </div>
           </div>
     
        </div>
        
    </div> 
  )
}

export default Projects