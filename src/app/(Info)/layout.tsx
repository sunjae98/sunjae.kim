import { ReactNode } from 'react'
import Header from '@/app/_components/global/Header'

type Props = { children: ReactNode }
export default function SignupLayout({ children }: Props) {
  return (
    <main className="flex flex-col justify-center items-center">
      <Header />
      {children}
    </main>
  )
}
