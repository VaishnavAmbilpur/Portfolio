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
    import ProjectHolder from '../Componets/ProjectHolder';
    import  skyPre from "../assets/Sky.png"
    import RgsGame from "../assets/RPS Game.png"
    import Thinkbold from "../assets/Thinkbold.png"
    import { LinkedinLogoIcon } from '@phosphor-icons/react';
    import Chatty from '../assets/Chatty.png'
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
             <Link to="/"> <div className='flex gap-1 theme-hover p-2 rounded-lg items-center'><HouseSimple size={`19`} weight="thin" /><span>Home</span></div></Link>
              <Link to="/TechStack"><div className='flex gap-1 p-2 rounded-lg theme-hover items-center'><Info size={19} weight="thin" /><span>Info</span></div></Link>
              <Link to="/Projects"><div className='flex gap-1 p-2 rounded-lg items-center theme-hover'><AppWindow size={19} weight="thin" /><span>Projects</span></div></Link>
           </div>
        </div>
          <div className='w-100 text-sm mx-2 p-3 mt-10 break flex justify-items-start flex-col md:min-w-250  gap-4 md:mt-3 md:mx-30 text-red-50'>
                            <span className='con justify-start ml-2'><span className=' text-2xl md:text-4xl mb-7'>Projects</span></span>
<span className='con grid grid-cols-1 sm:grid-cols-3  justify-start mr-2'><span className=' text-2xl md:text-4xl mb-7'><ProjectHolder
  title="Sky"
  description="A clean, user-friendly React-based weather app using OpenWeatherMap API "
  imageUrl={skyPre}
  tags={["React", "Node.js", "OpenWeather API", "Tailwind CSS","Typescript"]}
  LiveUrl="https://weather-app-seven-topaz-95.vercel.app/"
  codeUrl="https://github.com/VaishnavAmbilpur/Weather-App"
/></span>
<span className=' text-2xl md:text-4xl mb-7 mr-2' ><ProjectHolder
  title="Rock Paper Scissor"  
  description="A classic Rock-Paper-scissors game built with pure HTML, CSS, and JavaScript."
  imageUrl={RgsGame}
  tags={["HTML", "CSS", "JS"]}
  LiveUrl="https://rock-paper-scissors-ten-roan.vercel.app/"
  codeUrl="https://github.com/VaishnavAmbilpur/Rock-Paper-scissors-"
/></span>
<span className=' text-2xl md:text-4xl mb-7 mr-2' ><ProjectHolder
  title="Thinkbold"  
  description="A simple, efficient notepad app built with the MERN stack for seamless note-taking."
  imageUrl={Thinkbold}
  tags={["React", "Express", "Node.js","Mongodb"]}
  LiveUrl="https://thinkbold.onrender.com/ "
  codeUrl="https://github.com/VaishnavAmbilpur/Thinkbold"
/></span>
<span className=' text-2xl md:text-4xl mb-7 mr-2' ><ProjectHolder
  title="Chatty"  
  description="A Real-time Chat App made using Websockets"
  imageUrl={Chatty}
  tags={["React", "Node.js","Typescript","Websocket", "Tailwind CSS"]}
  LiveUrl="https://chatty-psi-two.vercel.app/"
  codeUrl="https://github.com/VaishnavAmbilpur/Chatty "
/></span></span>

                                    <div className='min-h-0.5 w-80 mx-3 md:min-200 bg-amber-50'></div>  
                            <div className='min-h-0.5 w-80 mx-3 md:min-200 font-sans font-extralight text-xs tracking-widest'>
                            <div className='my-3 font-extrabold font-geo md:text-xl flex gap-x-3 items-center '>Connect with Me
                              <button className='p-2 theme-hover rounded-lg transition-all'><a href='https://www.linkedin.com/in/vaishnav-ambilpur-005a2a304/?originalSubdomain=in' target='blank'><LinkedinLogoIcon size={24} /></a></button>
              </div>
                              <a className='font-sans font-extralight'>vaishnavambilpur2006@gmail.com</a>
                            </div>
           </div>
     
        </div>
        
    </div> 
  )
}

export default Projects