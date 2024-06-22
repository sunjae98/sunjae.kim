import { ReactNode } from 'react'
import Image from 'next/image'
import Header from '@/app/_components/global/Header'

type Props = { children: ReactNode }
export default function SignupLayout({ children }: Props) {
  return (
    <main className="flex flex-col">
      <Header />
      {children}
    </main>
  )
}
