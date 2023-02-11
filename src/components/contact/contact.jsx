import React from 'react'
import { SiFacebook, SiGmail, SiMaildotru,SiLinkedin, SiYahoo } from 'react-icons/si'
import {IoMdCall, IoMdCellular} from 'react-icons/io'
import './contact.css'

const contact = () => {
  return (
    <section id='contact'>
      <h2>Contact me <SiMaildotru/></h2>
      <div className="container contact__container">
         {/* <medium><SiGmail/>  oanustoop1@gmail.com   &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;<SiYahoo/>  oanustoop@yahoo.com   &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; <IoMdCall/> +91 8339919470   &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; <a href="https://www.linkedin.com/in/anustoop99/" className='btn'><SiLinkedin/></a>
           &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;<a href="https://www.facebook.com/rex.xii.3/" className='btn'><SiFacebook/></a></medium><br></br>
          //  <medium><SiGmail/> oanustoop1@gmail.com  */}
          <ul className="Contacts">
          <medium><SiGmail/> oanustoop1@gmail.com
                </medium>
                <medium><SiYahoo/> oanustoop@yahoo.com 
                </medium> 
                <medium>
                <IoMdCall/> +91 8339919470
                </medium>
                <medium>
                <a href="https://www.linkedin.com/in/anustoop99/" className='btn'><SiLinkedin/></a>
                </medium>
                <medium>
                <a href="https://www.facebook.com/rex.xii.3/" className='btn'><SiFacebook/></a>
                </medium>
                </ul>
         {/* <medium><IoMdCall/> +91 8339919470</medium><br></br>
         <a href="https://www.linkedin.com/in/anustoop99/" className='btn'><SiLinkedin/></a><br></br>
         <a href="https://www.facebook.com/rex.xii.3/" className='btn'><SiFacebook/></a><br></br> */}
      </div>
    </section>
  )
}

export default contact