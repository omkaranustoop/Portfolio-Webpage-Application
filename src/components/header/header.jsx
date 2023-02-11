import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/My_Pic3.jpeg'

const header = () => {
  return (
    <header>
      <div className="container header__container">
         <h2> Hi, Welcome to my homepage!!</h2>
         <h1>This is Omkar Anustoop</h1>
         <h2 className="text-light">Software Engineer</h2>
         <CTA/>
         <div className="me">
          <div className="me-image">
          <img src = {ME} alt="me"/>
          </div>
         </div>
      </div>
    </header>
  )
}

export default header