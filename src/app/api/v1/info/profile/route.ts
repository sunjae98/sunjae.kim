import { LOGO_IMG } from '@/app/_constants/imageLinks'
import { NextResponse } from 'next/server'

export async function GET() {
  //mock data
  const res = [
    [
      {
        category: 'Frameworks',
        items: [{ imgSrc: LOGO_IMG.framework.nextJS }],
      },
      {
        category: 'Libraries',
        items: [{ imgSrc: LOGO_IMG.library.react }, { imgSrc: LOGO_IMG.library.stomp }],
      },
      {
        category: 'CSS',
        items: [{ imgSrc: LOGO_IMG.css.tailwind }, { imgSrc: LOGO_IMG.css.styledComponents }],
      },
    ],
    [
      {
        category: 'Languages',
        items: [{ imgSrc: LOGO_IMG.language.javaScript }, { imgSrc: LOGO_IMG.language.typeScript }],
      },
      {
        category: 'Cloud Services',
        items: [{ imgSrc: LOGO_IMG.cloudService.ec2 }, { imgSrc: LOGO_IMG.cloudService.rds }],
      },
      {
        category: 'Communication',
        items: [
          { imgSrc: LOGO_IMG.communication.slack },
          { imgSrc: LOGO_IMG.communication.figma },
          { imgSrc: LOGO_IMG.communication.notion },
        ],
      },
    ],
  ]

  return NextResponse.json({ stacks: res })
}
