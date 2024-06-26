import Image from 'next/image'
import useOnScreen from '@/app/hooks/useOnScreen'
import { useRef } from 'react'

type ProjectInfoProps = {
  title: string
  position: string
  description: string
  period: string
  introduction_url: string
  github_url: string
  imageURL: string
  onClick?: () => void
}

export default function ProjectInfo({
  title,
  position,
  description,
  period,
  introduction_url,
  github_url,
  imageURL,
  onClick,
}: ProjectInfoProps) {
  const onboardWrapRef = useRef<HTMLDivElement>(null!)
  const isVisible = useOnScreen(onboardWrapRef)

  const container = {
    common:
      'p-16 my-4 bg-background-light rounded-xl bg-gray-700 mx-20 transition ease-in-out hover:scale-105 hover:shadow-xl',
    hover: 'hover:cursor-pointer',
    web: 'grid grid-cols-12 w-[92%]',
    mobile: 'grid grid-cols-1',
    animation: `transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`,
  }

  return (
    <div
      className={`${container.common} ${container.hover} ${container.mobile} md:${container.web} ${container.animation}`}
      ref={onboardWrapRef}
      onClick={onClick}>
      <div className="relative col-start-1 col-end-6 bg-background-light mr-8">
        <Image
          src={imageURL}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: 'cover', borderRadius: '0.75rem' }}
        />
      </div>
      <div
        className={`col-start-6 col-end-13 p-4 bg-background-light text-white flex flex-col justify-center gap-4`}>
        <div className="flex flex-col gap-2 md:flex-row items-center">
          <div className="text-xl font-bold md:text-4xl">{title}</div>
          <div className="text-sm font-bold md:text-xl text-gray-400">{position}</div>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <div className="text-sm md:text-xl text-gray-400">{description}</div>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <div className="text-sm font-bold md:text-xl">Period</div>
          <div className="text-sm md:text-lg text-gray-400">{period}</div>
        </div>
        <div className="flex-row hidden gap-4 md:flex items-center">
          <div className="text-sm font-bold md:text-xl">introduction</div>
          <div className="text-sm md:text-md text-gray-400">{introduction_url}</div>
        </div>
        <div className="flex-row hidden gap-4 md:flex items-center">
          <div className="text-sm font-bold md:text-xl">github</div>
          <div className="text-sm md:text-md text-gray-400">{github_url}</div>
        </div>
      </div>
    </div>
  )
}
