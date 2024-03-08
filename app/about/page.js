import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <main className='mt-[30px]'>
        
        <nav>
            <ul className="flex gap-6">
              <li> <Link href="/about/mission">Mission</Link> </li>
              <li> <Link href="/about/vission">Vission</Link> </li>
            </ul>
          </nav>
    </main>
  )
}

export default About