'use client';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import "./Fluid.css"

export default function SmoothFollower() {
  useGSAP(()=>{
     gsap.set(".ball", {xPercent: -50, yPercent: -50});

let targets = gsap.utils.toArray(".ball"); 

window.addEventListener("mousemove", e => {
  gsap.to(targets, {
    duration: 0.15,
    x: e.pageX,
    y: e.pageY,
    ease: "none",
    overwrite: "auto",
    stagger: 0.035,
  });
});
  },[])


  return (
    <>
    

<div class="ball"></div>
<div class="ball"></div>
<div class="ball"></div>
<div class="ball"></div>
<div class="ball"></div>
<div class="ball"></div>
<div class="ball"></div>
<div class="ball"></div>
<div class="ball"></div>
<div class="ball"></div>


    </>
  );
}
