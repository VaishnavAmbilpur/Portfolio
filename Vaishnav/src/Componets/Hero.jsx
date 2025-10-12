import React from 'react'
import { HouseSimple, Info, AppWindow } from "@phosphor-icons/react";
import gsap from 'gsap'
import { useGSAP } from "@gsap/react"
import { SiCodeforces } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { SiGoogledocs } from "react-icons/si";
import { Link } from "react-router-dom";
import { LinkedinLogoIcon } from '@phosphor-icons/react';
import "./Hero.css"
import AnimatedBackground from '../Componets/Background1';

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo('.con', {
      x: 0,
      delay: 0.6,
      opacity: 0,
      ease: "bounce.in",
      scrub: true,
      duration: 0
    }, {
      x: 0,
      ease: "circ.in",
      opacity: 1,
      scrub: true,
      duration: 0.3
    })
  });

  useGSAP(() => {
    gsap.fromTo('#h', {
      x: 0,
      delay: 0.6,
      opacity: 0,
      ease: "bounce.in",
      scrub: true,
      duration: 0
    }, {
      x: 0,
      ease: "circ.in",
      opacity: 1,
      scrub: true,
      duration: 0.3
    })
  });

  useGSAP(() => {
    gsap.fromTo('.me', {
      x: 0,
      delay: 0.6,
      opacity: 0,
      ease: "bounce.in",
      scrub: true,
      duration: 0
    }, {
      x: 0,
      ease: "circ.in",
      opacity: 1,
      scrub: true,
      duration: 0.3
    })
  }, []);

  return (

      
      <div className='backdrop-blur-1xl my-10 p-3 text-white min-h-90 w-screen font-Josefin items-start md:mx-10 md:pl-25 relative z-10'>
        <div className='m-7 text-5xl md:text-7xl tracking-widest'>
          <span className='min-h-fit min-w-fit animate gradient'>
            <span className=''>Vaishnav</span>
          </span>
          <div className='me'>
            <div className='font-sans font-extrabold m-2 text-sm  w-fit tracking-widest transition delay-50 duration-300  md:text-sm text-red-50 hover:translate-x-1  transition-normal'>
              Developer & Problem Solver
            </div>
            <div></div>
          </div>
        </div>
        <div className="md:flex flex-row " id='h'>
          <div className='flex mt-0 mx-8 md:mt-4'>
            <div className="text-red-50 flex flex-row gap-8 mt-5 md:flex-col">
              <Link to="/"><div className='flex gap-1 p-2 rounded-lg theme-hover items-center'><HouseSimple size={19} weight="thin" /><span className='mt-1'>Home</span></div></Link>
              <Link to="/TechStack"><div className='flex gap-1  p-2 rounded-lg theme-hover items-center'><Info size={19} weight="thin" /><span className='mt-1'>Skills</span></div></Link>
              <Link to="/Projects"><div className='flex gap-1  p-2 rounded-lg theme-hover items-center'><AppWindow size={19} weight="thin" /><span className='mt-1'>Projects</span></div></Link>
            </div>
          </div>
          <div className='w-100 text-sm mx-2 p-3 mt-10 break flex justify-items-start flex-col md:min-w-250 gap-4 md:mt-3 md:mx-30 text-red-50'>
            <span className='con justify-start ml-2'><span className=' text-2xl md:text-4xl mb-7'>Hey ,</span></span>
            <span className='con m-1 flex justify-start'><span className='p-2 text-left md:text-xl w-200 tracking-wide leading-8'>Ask me what I do, and I’ll say, “I talk to computers until they do what I want.”
It’s a thrilling mix of genius, frustration, and too much coffee.
            </span></span>
            <div className='min-h-fit w-80 mx-3 md:min-200 flex flex-row gap-4 items-center '>
              <button className='p-2 theme-hover rounded-lg transition-all'><Link to="/codeforces"><SiCodeforces size={22} /></Link></button>
              <button className='p-2 theme-hover rounded-lg transition-all'><a href='https://leetcode.com/u/Dexter_Morgan_11/' target='blank'><SiLeetcode size={22} /></a></button>
              <button className='p-2 theme-hover rounded-lg transition-all'><a href='https://github.com/VaishnavAmbilpur'  target='blank'><FiGithub size={22} /></a></button>
              {/* <button className='p-2 theme-hover rounded-lg transition-all flex justify-between gap-1'><SiGoogledocs size={22} />Resume</button> */}
            </div>
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

export default Hero