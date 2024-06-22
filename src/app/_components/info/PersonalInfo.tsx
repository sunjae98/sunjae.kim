import Image from 'next/image'

type PersonalInfoProps = {
  name: string
  email: string
  github: string
  blog: string
  profileImage: string
}

export default function PersonalInfo({
  name,
  email,
  github,
  blog,
  profileImage,
}: PersonalInfoProps) {
  return (
    <div className="w-full my-4 rounded-xl max-w-contet bg-gray-700 p-10 px-16">
      <div className="grid h-auto grid-cols-12 gap-4 md:gap-12 md:h-96">
        <div className="relative w-full col-start-1 col-end-6 overflow-hidden border rounded-xl">
          <Image src={profileImage} alt="" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="flex flex-col justify-center col-start-6 col-end-13 md:gap-6">
          <div className="flex flex-col md:gap-10 md:flex-row items-center">
            <div className="text-lg font-bold md:text-4xl">Profile</div>
            <div className="text-sm font-bold md:text-2xl text-text-normal text-neutral-900">
              Frontend Engineer
            </div>
          </div>
          <div className="flex flex-col md:gap-4 md:flex-row items-center">
            <div className="text-lg font-bold md:text-xl">Name</div>
            <div className="text-sm md:text-xl text-text-normal text-gray-400">{name}</div>
          </div>
          <div className="flex flex-col md:gap-4 md:flex-row items-center">
            <div className="text-lg font-bold md:text-xl">E-Mail</div>
            <div className="text-sm md:text-xl text-text-normal text-gray-400">{email}</div>
          </div>
          <div className="flex-row hidden gap-4 md:flex items-center">
            <div className="text-xl font-bold">GitHub</div>
            <div className="text-xl text-gray-400">{github}</div>
          </div>
          <div className="flex-row hidden gap-4 md:flex items-center">
            <div className="text-xl font-bold">Blog</div>
            <div className="text-xl text-gray-400">{blog}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
