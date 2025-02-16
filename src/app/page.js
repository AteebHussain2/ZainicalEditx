import AboutMe from '@/components/AboutMe'
import HeroAli from '@/components/HeroAli'
import HeroHadi from '@/components/HeroHadi'
import Projects from '@/components/Projects'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroAli />
      <AboutMe />
      <Projects />
      <HeroHadi />
    </div>
  )
}

export default page
