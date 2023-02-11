import React from 'react'
import CV from '../../assets/Omkar_Anustoop_Resume.pdf'
import { SiLinkedin } from 'react-icons/si'

const CTA = () => {
  return (
    <div className='cta'>
        <a href="https://drive.google.com/file/d/1_tcs0qOoOWg6rHIdlWrFVcgkVEacPshm/view?usp=share_link" download className='btn'>My CV</a>
        <a href="https://www.linkedin.com/in/anustoop99/" className='btn btn-primary'><SiLinkedin/></a>
    </div>
  )
}

export default CTA