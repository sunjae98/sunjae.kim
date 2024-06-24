'use client'

import ContactOrbit from '@/app/_components/info/ContactOrbit'
import { API_URL } from '@/app/_constants/urls'
import { useState, useEffect } from 'react'

type Orbit = {
  href: string
  imgURL: string
  animationClass?: string
}

export default function Page() {
  const [orbits, setOrbits] = useState<Orbit[]>([])

  useEffect(() => {
    fetch(`${API_URL}info/contact`)
      .then((response) => response.json())
      .then((data) => {
        setOrbits(data.orbits)
      })
      .catch((error) => console.error('Error:', error))
  }, [])

  return (
    <div className="grid grid-cols-1 grid-rows-6 md:grid-rows-4 h-[70vh] gap-12 justify-items-center align-items-center m-20">
      {orbits.map((orbit, index) => (
        <ContactOrbit
          key={index}
          href={orbit.href}
          imgURL={orbit.imgURL}
          animationClass={orbit.animationClass}
        />
      ))}
    </div>
  )
}
