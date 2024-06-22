import Image from 'next/image'

type TechStackItemProps = {
  imgSrc: string
}

export default function TechStackItem({ imgSrc }: TechStackItemProps) {
  return (
    <div className="relative h-16 md:h-28">
      <Image
        src={imgSrc}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        style={{ objectFit: 'contain' }}
        blurDataURL="path/to/placeholder.jpg"
      />
    </div>
  )
}
