import React from 'react'
import './work_experience.css'
import { SiPaytm } from 'react-icons/si'
import { SiWipro } from 'react-icons/si'
import { BsDot, BsPatchCheck, BsPatchCheckFill} from 'react-icons/bs'

export const work_experience = () => {
  return (
    <section id='experience'>
      <h2>Work Experience</h2>
      <div className="container work_experience__container">
        <div className="work_experience__content">
          <div className="work_experience__cards">
            <article className='work_experience__card'>
                <SiPaytm className='work_experience__icon'/>
                <h5> Software Engineer</h5>
                <small>July 2022 - Present</small>
                <br></br>
                <medium><BsPatchCheckFill/> Performing data exploration and analysis using PySpark
                  to generate insights which drive business decision.
                </medium><br></br>
                <medium><BsPatchCheckFill/> Building predictive machine learning models, followed by 
                  app integration using FastAPI and deployment. 
                </medium><br></br>
                <medium><BsPatchCheckFill/> Skills:- PySpark, FastAPI, Docker, Git, Kubernetes
                </medium>
            </article>
            <article className='work_experience__card'>
                <SiWipro className='work_experience__icon'/>
                <h5> Software Engineer Intern </h5>
                <small>June 2021 - July 2021</small>
                <br></br>
                <medium><BsPatchCheckFill/> Implemented functions in Core Python to automate basic functionalities of an application.
                </medium><br></br>
                <medium><BsPatchCheckFill/> Built the Login and Registration Portal of an Application using ASP.NET MVC 
                   Framework in C#. 
                </medium><br></br>
                <medium><BsPatchCheckFill/> Skills:- ASP.NET MVC - C#, Python
                </medium>
            </article>
          </div>
        </div>
      </div>
      </section>
  )
}

export default work_experience
