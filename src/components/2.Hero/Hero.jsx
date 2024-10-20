import React from 'react'
import Lottie from "lottie-react";
import devAnimation from "./../../../public/animation/Animation - 1727786632389.json"
import './Hero.css'
import { motion } from 'framer-motion';
 function Hero() {
  return (
    <div>
      <section className='hero flex'>
<div className='left'>
  <div className="pairent-avatar"></div>
  <img src="\img\9d927c40-104d-4236-9d61-6e59bf199cc2-modified.png" className='avatar' alt=""/>
  <span className='icon-verified'></span>

  <h1 
 

  className='title'>Software engineer , founder,
    and amateur astronaut.
    </h1>
 
  <p className='subtitle'>I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder
  and CEO of Planetaria, where we develop technologies that empower regular people to 
 explore space on their own terms.</p>

<div className="icons ">
  <div className="icon icon-twitter"></div>
  <div className="icon icon-instagram"></div>
  <div className="icon icon-github"></div>
  <div className="icon icon-linkedin-square"></div>
</div>
</div>
<div className='right animation'>
<Lottie style={{height: 355}} animationData={devAnimation} />
  </div>
      </section>
    </div>
  )
}
export default Hero;