/* eslint-disable react/no-unescaped-entities */
'use client'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  const container = {
    common: 'grid gap-4 w-screen h-screen text-center',
    web: 'md:grid-cols-2 md:p-16',
    mobile: 'grid-cols-1 p-4',
  }
  const serviceName = {
    common: 'font-bold flex justify-center items-center text-white ',
    web: 'md:col-span-2 md:text-6xl',
    mobile: 'col-span-1 text-4xl',
  }
  const categoryName = {
    common: 'flex font-bold justify-center items-center',
    hover: 'hover:shadow-lg hover:text-white hover:bg-black hover:bg-opacity-40 hover:rounded-xl',
    web: 'md:p-8 md:text-3xl md:bg-transparent md:text-text-normal md:m-12',
    mobile: 'p-4 text-xl bg-black bg-opacity-30 rounded-xl text-white',
  }
  const categories: string[] = ['Profile', 'Projects', 'Activities', 'Contact']

  return (
    <>
      <div className={`${container.common} ${container.web} ${container.mobile}`}>
        <div
          className={`${serviceName.common} ${serviceName.web} ${serviceName.mobile} flex-col gap-4 z-50`}>
          <div className="cursor-pointer mb-10">
            <Link href={`/`}>Sunjae.kim</Link>
          </div>
          <div className="text-base md:text-2xl animate-bounce hover:cursor-default">
            Welcome to my portfolio
          </div>
          <div className="text-base md:text-2xl animate-bounce hover:cursor-default">
            Click to view the info
          </div>
        </div>

        {categories.map((category, index) => (
          <Link
            key={index}
            href={`/${category.replace(/\s+/g, '').toLowerCase()}`}
            passHref
            className={`${categoryName.common} ${categoryName.hover} ${categoryName.web} ${categoryName.mobile}`}>
            <div>{category}</div>
          </Link>
        ))}
      </div>
    </>
  )
}
