import React from 'react'
import './nav.css'
import { SiHomeadvisor } from 'react-icons/si'
import { SiAboutdotme } from 'react-icons/si'
import { SiCodenewbie } from 'react-icons/si'
import { BsBookHalf } from 'react-icons/bs'
import { BsFillTelephoneFill } from 'react-icons/bs'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active':''}><SiHomeadvisor/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active':''}  ><SiAboutdotme/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active':''}><BsBookHalf/></a>
      <a href="#programming" onClick={()=> setActiveNav('#programming')} className={activeNav === '#programming' ? 'active':''}><SiCodenewbie/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active':''}><BsFillTelephoneFill/></a>
    </nav>
  )
}

export default Nav