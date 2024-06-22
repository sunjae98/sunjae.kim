import { ReactNode } from 'react'

type TechStackProps = {
  children: ReactNode
}

export default function TechStack({ children }: TechStackProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto pb-4 mt-4 mb-4 text-center my-4 rounded-xl max-w-contet bg-gray-700 p-10 px-16">
      <div className="mb-4 font-sans text-2xl font-bold md:text-5xl">I MAINLY USE</div>
      {children}
    </div>
  )
}
