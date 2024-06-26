import { ICON_IMG } from '@/app/_constants/imageLinks'
import { NextResponse } from 'next/server'

export async function GET() {
  //mock data
  const res = [
    {
      href: 'https://github.com/sunjae98',
      imgURL: ICON_IMG.github,
      animationClass: 'animate-orbit1',
    },
    {
      href: 'https://medium.com/@woal9844',
      imgURL: ICON_IMG.medium,
      animationClass: 'animate-orbit2',
    },
    {
      href: '/profile',
      imgURL: ICON_IMG.mail,
      animationClass: 'animate-orbit3',
    },
    {
      href: 'https://www.linkedin.com/in/sunjae9844/',
      imgURL: ICON_IMG.linkedIn,
      animationClass: 'animate-orbit4',
    },
    {
      href: 'https://www.tistory.com/member/blog',
      imgURL: ICON_IMG.velog,
      animationClass: 'animate-orbit5',
    },
  ]

  return NextResponse.json({ orbits: res })
}
