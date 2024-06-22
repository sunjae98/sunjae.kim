import Image from 'next/image'

type ProjectInfoProps = {
  title: string
  description: string
  period: string
  introduction_url: string
  github_url: string
  imageURL: string
}

export default function ProjectInfo({
  title,
  description,
  period,
  introduction_url,
  github_url,
  imageURL,
}: ProjectInfoProps) {
  const container = {
    common:
      'p-16 mt-4 bg-background-light rounded-xl bg-gray-700 m-20 transition ease-in-out hover:scale-105 hover:shadow-xl',
    hover: 'hover:cursor-pointer',
    web: 'grid grid-cols-12 w-[92%]',
    mobile: 'grid grid-cols-1',
  }

  return (
    <div
      className={`${container.common} ${container.hover} ${container.mobile} md:${container.web}`}>
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
        <div className="flex flex-col gap-2 md:flex-row">
          <div className="text-xl font-bold md:text-4xl">{title}</div>
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
