import { PROJECT_IMG } from '@/app/_constants/imageLinks'
import { NextResponse } from 'next/server'

export async function GET() {
  //mock data
  const res = [
    {
      title: 'Check It',
      position: 'FrontEnd',
      description: '그래프 기반 독서 기록 서비스',
      imageURL: PROJECT_IMG.checkit,
      date: '2023.09 ~ 2023.12',
      introduction: 'https://medium.com/checkit',
      github: 'https://github.com/techeer-sv/Checkit',
      slug: 'checkit',
    },
    {
      title: 'GiToDoc',
      description: '깃허브 레포지토리 연동을 통한 자동 문서화 서비스',
      position: 'TeamLeader/BE',
      imageURL: PROJECT_IMG.gtd,
      date: '2024.01 ~ 2024.02',
      introduction: 'https://medium.com/gitodoc',
      github: 'https://github.com/2023WB-TeamB',
      slug: 'gitodoc',
    },
    {
      title: 'Studymate',
      description: '실시간 매칭을 통한 학습 도움 플랫폼',
      position: 'TeamLeader/FE',
      imageURL: PROJECT_IMG.studymate,
      date: '2024.01 ~ 2024.06',
      introduction: '-',
      github: 'https://github.com/TUK2024CD-Studymate',
      slug: 'studymate',
    },
    {
      title: 'This is 4 you',
      description: '나만의 네컷 프레임 사진을 만들어주는 서비스',
      position: 'FrontEnd',
      imageURL: PROJECT_IMG.t4y,
      date: '2023.07 ~ 2023.08',
      introduction: 'https://medium.com/t4y',
      github: 'https://github.com/2023SB-TeamJ/2023SB-Team-J',
      slug: 't4y',
    },
  ]

  return NextResponse.json({ projects: res })
}
