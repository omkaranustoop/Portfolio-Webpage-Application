import React from 'react'
import './programming_experience.css'
import { BsDot, BsPatchCheck, BsPatchCheckFill} from 'react-icons/bs'
import { SiCodeforces, SiCodechef, SiGithub, SiLeetcode } from 'react-icons/si'

const programming_experience = () => {
  return (
    <section id='programming'>
      <h2>Programming Experience</h2>
      <div className="container programming_experience__container">
        <div className="programming_experience__content">
          <div className="programming_experience__cards">
          <article className='programming_experience__card'>
            <a href="https://github.com/omkaranustoop">
                <SiGithub className='programming_experience__icon'/></a>
                <br></br>
                {/* <medium><BsPatchCheckFill/> 
                </medium> */}
            </article>
            <article className='programming_experience__card'>
              <a href="https://codeforces.com/profile/Anustoop99">
                <SiCodeforces className='programming_experience__icon'/></a>
                <br></br>
                {/* <medium><BsPatchCheckFill/> Performing data exploration and analysis using PySpark
                  to generate insights which drive business decision.
                </medium> */}
            </article>
            <article className='programming_experience__card'>
              <a href="https://www.codechef.com/users/anustoop_99">
                <SiCodechef className='programming_experience__icon'/></a>
                <br></br>
                {/* <medium><BsPatchCheckFill/> Implemented functions in Core Python to automate basic functionalities of an application.
                </medium> */}
            </article>
            <article className='programming_experience__card'>
              <a href = "https://leetcode.com/Anustoop99/">
                <SiLeetcode className='programming_experience__icon'/></a>
                <br></br>
                {/* <medium><BsPatchCheckFill/> Implemented functions in Core Python to automate basic functionalities of an application.
                </medium> */}
            </article>
            <medium><BsPatchCheckFill/> <a href = "https://drive.google.com/file/d/1JzsZZ3xLbK8lTidQiE3McrnWWR6cYpJC/view">ICPC Regionals</a>
            &nbsp;&nbsp;ICPC Amritapuri Regionalist as a part of team Hash_include18
                </medium>
                <medium><BsPatchCheckFill/> <a href = "https://drive.google.com/file/d/1FivTGRX5p_wcC3PwLynoRkuRqKFKSS3k/view">Google Kickstart</a>
            &nbsp;&nbsp;Round C 2021 - Secured Global Rank 1253 among over 10k Participants worldwide
                </medium>
          </div>
        </div>
      </div>
    </section>
  )
}

export default programming_experience