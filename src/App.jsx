import './index.css'
import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/About'
import Work_Exp from './components/work_experience/work_experience'
import Prog_Exp from './components/programming_experience/programming_experience'
import Skills from './components/skills/skills'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Work_Exp/>
      <Prog_Exp/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App