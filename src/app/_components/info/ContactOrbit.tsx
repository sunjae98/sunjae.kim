import Image from 'next/image'
import Link from 'next/link'

type OrbitProps = {
  href: string
  imgURL: string
  animationClass?: string
}

export default function ContactOrbit({ href, imgURL, animationClass }: OrbitProps) {
  const webStyle =
    'hidden md:flex md:block col-start-1 col-end-1 row-start-2 row-end-2 p-20 rounded-xl bg-[#A29FB3] mt-20'
  const mobileStyle =
    'md:hidden col-start-1 col-end-12 flex justify-center items-center py-1 relative h-full w-5/6 rounded-xl bg-[#A29FB3] hover:scale-105 mt-10'

  return (
    <>
      <div className={`${webStyle} ${animationClass}`}>
        <Link href={href}>
          <Image
            src={imgURL}
            alt=""
            fill
            priority={false}
            sizes="(min-width: 512px) 600px, 100vw"
            style={{ objectFit: 'contain' }}
          />
        </Link>
      </div>
      <div className={mobileStyle}>
        <Link href={href} className="flex justify-center">
          <Image
            src={imgURL}
            alt=""
            fill
            priority={false}
            sizes="(min-width: 512px) 600px, 100vw"
            style={{ objectFit: 'contain' }}
          />
        </Link>
      </div>
    </>
  )
}
