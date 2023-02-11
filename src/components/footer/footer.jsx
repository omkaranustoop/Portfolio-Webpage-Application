import React from 'react'
import './footer.css'

const footer = () => {
  return (
    <footer>
     <a href="#" className='footer__logo'>anustoop99</a>
     <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Work Experience</a></li>
      <li><a href="#programming">Programming Experience</a></li>
      <li><a href="#contact">Contact</a></li>
     </ul>
     <div className="footer__copyright">
      <small>&copy; Omkar Anustoop. All rights reserved.</small>
     </div>
    </footer>
  )
}

export default footer