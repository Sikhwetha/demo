import React from 'react'
import Hero from '../pages/Hero'
import About from "../pages/About"
import Services from '../pages/Services'
import Achiev from '../pages/Achiev'
import MeetOurChefs from '../pages/MeetOurChefs'


export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Achiev />
      <MeetOurChefs />
    </div>
  )
}
