import React from 'react'
import './About.css'
import { SiWorkplace } from 'react-icons/si'
import { FaUserGraduate } from 'react-icons/fa'
import { FaGamepad } from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>A Basic Intro</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
                <SiWorkplace className='about__icon'/>
                <h5> Current Org</h5>
                <small>Paytm</small>
            </article>
            <article className='about__card'>
                <FaUserGraduate className='about__icon'/>
                <h5> Education </h5>
                <small>Indian Institute of Technology, Patna - B.Tech 2022</small>
            </article>
            <article className='about__card'>
                <FaGamepad className='about__icon'/>
                <h5> Hobbies/Interests</h5>
                <small>Reading classic literature, writing mystery fiction, debating </small>
            </article>
          </div>
          <p><small>
          I am a B.Tech 2022 graduate from IIT Patna, currently working at Paytm. 
          I have 6 years + programming experience in C,C++,Python and 2+ Years experience 
          in working with frameworks like PySpark, ASP.NET MVC, Node.js, React and tools like Git, 
          Docker. I like problem solving using Data Structures and Algorithms and was ICPC 
          Amritapuri regionalist 2020 as a member of team Hash_Include18.   
          </small> 
          </p>
          <a href="#contact" className='btn'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About