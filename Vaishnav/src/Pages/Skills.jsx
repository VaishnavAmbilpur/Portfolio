import React from 'react'
import { HouseSimple,Info,AppWindow} from "@phosphor-icons/react";
import gsap from 'gsap'
import {useGSAP} from "@gsap/react"
import { SiCodeforces } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { SiGoogledocs } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiRender } from "react-icons/si";
import { RiGithubLine } from "react-icons/ri";
import { SiCplusplus } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaGit } from "react-icons/fa";
    import { Link } from "react-router-dom";
    import "../Componets/Hero.css"
const Skills = () => {
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
        <div className='backdrop-blur-1xl my-10 p-3 overflow-x-hidden text-white min-h-120 w-screen font-playfiar items-start md:mx-10  md:pl-25'>
        <div className='m-7 text-5xl  md:text-7xl tracking-widest'>
           <span className='min-h-fit min-w-fit animate gradient'><span className=''>Vaishnav</span></span>
            
            <div className='me'> <div className='font-sans font-extralight m-2 text-sm w-fit tracking-widest transition delay-100 duration-300 md:text-sm text-red-50'>Developer & Problem Solver</div>
        </div>
           </div>
        
        <div className="md:flex flex-row " id='h'>
           <div className='flex mt-0 mx-8 md:mt-4'><div className="text-red-50 flex flex-row gap-8 mt-5 md:flex-col">
              <Link to="/"><div className='flex gap-1 theme-hover p-2 rounded-lg items-center'><HouseSimple size={`19`} weight="thin" /><span>Home</span></div></Link>
              <Link to="/TechStack">   <div className='flex gap-1  theme-hover p-2 rounded-lg items-center'><Info size={19} weight="thin" /><span>Info</span></div></Link>
              <Link to="/Projects"><div className='flex gap-1  theme-hover p-2 rounded-lg items-center'><AppWindow size={19} weight="thin" /><span>Projects</span></div></Link>
           </div>
        </div>
          <div className='w-100 text-sm mx-2 p-3 mt-10 break flex justify-items-start flex-col md:min-w-250  gap-4 md:mt-3 md:mx-30 text-red-50'>
                            <span className='con justify-start ml-2'><span className=' text-2xl md:text-3xl mb-7'>Skills</span></span>
                            <span className='con m-1 flex justify-start'><span className='p-2 text-left md:text-xl w-200 tracking-wide leading-8'>Passionate Full Stack Developer mastering web technologies and creating dynamic websites with GSAP animations. Blending code & creativity for seamless, engaging user experiences
                            </span></span>
                                
                                  <div className='min-h-fit w-80 mx-3 md:min-200 grid grid-cols-4 md:flex flex-row gap-4 items-center '>
                                    <button className='theme-hover p-2 rounded-lg transition-all flex justify-center'><span><FaNodeJs size={28}/></span></button>
                                    <button className='theme-hover p-2 rounded-lg transition-all flex justify-center'><span><FaCss3Alt size={28}/></span></button>
                                    <button className='theme-hover p-2 rounded-lg transition-all flex justify-center'><span><FaHtml5 size={28}/></span></button>
                                    <button className='theme-hover p-2 rounded-lg transition-all flex justify-center'><span><RiTailwindCssFill size={28}/></span></button>
                                    <button className='theme-hover p-2 rounded-lg transition-all flex justify-center'><span><SiCplusplus size={28}/></span></button>
                                    <button className='theme-hover p-2 rounded-lg transition-all flex justify-center'><span><SiPostman size={28}/></span></button>
                                    <button className='theme-hover p-2 rounded-lg transition-all flex justify-center'><span><IoLogoJavascript size={28}/></span></button>
                                    <button className='theme-hover p-2 rounded-lg transition-all flex justify-center'><span><FaReact size={28}/></span></button>
                                    <button className='theme-hover p-2 rounded-lg transition-all flex justify-center'><span><SiMongodb size={28}/></span></button>
                                    <button className='theme-hover p-2 rounded-lg transition-all flex justify-center'><span><SiVercel size={28}/></span></button>
                                    <button className='theme-hover p-2 rounded-lg transition-all flex justify-center'><span><SiRender size={28}/></span></button>
                                    <button className='theme-hover p-2 rounded-lg transition-all flex justify-center'><span><RiGithubLine size={28}/></span></button>
                                    <button className='theme-hover p-2 rounded-lg transition-all flex justify-center'><span><SiExpress size={28}/></span></button>
                                    <button className='theme-hover p-2 rounded-lg transition-all flex justify-center'><span><FaGit size={28}/></span></button>
                                  </div>
                                    <div className='min-h-0.5 w-80 mx-3 md:min-200 bg-amber-50'></div>  
                            <div className='min-h-0.5 w-80 mx-3 md:min-200 font-sans font-extralight text-xs tracking-widest'>
                              <div className='my-3 font-extrabold font-geo md:text-xl'>Connect with Me</div>
                              <a className='font-sans font-extralight'>vaishnavambilpur2006@gmail.com</a>
                            </div>
           </div>
     
        </div>
        
    </div> 
  
  )
}

export default Skills