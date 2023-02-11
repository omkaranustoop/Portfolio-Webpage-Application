import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiCodeforces} from 'react-icons/si'

const header_socials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/anustoop99/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/omkaranustoop" target="_blank"><FaGithub/></a>
        <a href="https://github.com/omkaranustoop" target="_blank"><SiCodeforces/></a>
    </div>
  )
}

export default header_socials