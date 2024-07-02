import { ACTICITY_IMG } from '@/app/_constants/imageLinks'
import { NextResponse } from 'next/server'

export async function GET() {
  // 실제 데이터베이스 로직 대신 mock 데이터를 사용합니다.
  const res = [
    {
      title: 'Techeer',
      activityType: 'Developer Group',
      description: '개발자 꿈나무들을 위한 멘토링 프로그램',
      period: '2023.08 ~ ',
      moreInfoURL:
        'https://techeer-school.notion.site/techeer-school/techeer-2fad626a07494b91aaa1a1def5ab4c15',
      imageURL: ACTICITY_IMG.techeer,
    },
    {
      title: '실리콘 밸리 SW Bootcamp',
      activityType: 'BootCamp',
      description: '6주 X 7일 X 24시간 집중형 End-to-End 프로젝트',
      period: '2024.01 ~ 2024.02',
      moreInfoURL:
        'https://www.tukorea.ac.kr/tukorea/1099/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGdHVrb3JlYSUyRjM3NiUyRjUwNzI4JTJGYXJ0Y2xWaWV3LmRvJTNGcGFnZSUzRDElMjZzcmNoQ29sdW1uJTNEc2olMjZzcmNoV3JkJTNEJUVDJThCJUE0JUVCJUE2JUFDJUVDJUJEJTk4JUVCJUIwJUI4JUVCJUE2JUFDJTI2YmJzQ2xTZXElM0QlMjZiYnNPcGVuV3JkU2VxJTNEJTI2cmdzQmduZGVTdHIlM0QlMjZyZ3NFbmRkZVN0ciUzRCUyNmlzVmlld01pbmUlM0RmYWxzZSUyNnBhc3N3b3JkJTNEJTI2',
      imageURL: ACTICITY_IMG.WB2023,
    },
    {
      title: '실리콘 밸리 SW Bootcamp',
      activityType: 'Bootcamp',
      description: '6주 X 7일 X 24시간 집중형 End-to-End 프로젝트',
      period: '2023.07 ~ 2023.08',
      moreInfoURL:
        'https://www.tukorea.ac.kr/tukorea/1099/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGdHVrb3JlYSUyRjM3NiUyRjQ2NjQ5JTJGYXJ0Y2xWaWV3LmRvJTNGcGFnZSUzRDElMjZzcmNoQ29sdW1uJTNEc2olMjZzcmNoV3JkJTNEJUVDJThCJUE0JUVCJUE2JUFDJUVDJUJEJTk4JUVCJUIwJUI4JUVCJUE2JUFDJTI2YmJzQ2xTZXElM0QlMjZiYnNPcGVuV3JkU2VxJTNEJTI2cmdzQmduZGVTdHIlM0QlMjZyZ3NFbmRkZVN0ciUzRCUyNmlzVmlld01pbmUlM0RmYWxzZSUyNnBhc3N3b3JkJTNEJTI2',
      imageURL: ACTICITY_IMG.SB2023,
    },
    {
      title: '아이디어 해커톤',
      activityType: 'Hackathon',
      description: '무박 2일로 진행한 아이디어 구현 해커톤',
      period: '2024.05',
      moreInfoURL: 'https://forms.gle/PWiKEiajuQ4Qgs4D9',
      imageURL: ACTICITY_IMG.hackathon,
    },
    {
      title: '원티드 프리온보딩 FE 챌린지',
      activityType: 'Challenge',
      description: '주니어 개발자를 위한 역량 강화 세션',
      period: '2024.05',
      moreInfoURL:
        'https://www.wanted.co.kr/events/pre_challenge_fe_21?utm_source=google&utm_medium=sa&utm_campaign=kr_career_edu_web_sa_application&utm_term=%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A9&gad_source=1&gclid=CjwKCAjwxLKxBhA7EiwAXO0R0MkNpopAB9BC9oV7mEfuG4EroljfKnzaCUn1u7i0-6uZfgKLCJqI2RoCTUwQAvD_BwE',
      imageURL: ACTICITY_IMG.feChallenge,
    },
    {
      title: 'ICT 한이음',
      activityType: 'mentoring',
      description: '기업전문가 ICT멘토와 프로젝트를 수행하는 실무형 ICT인재 양성 프로그램',
      period: '2024.03~',
      moreInfoURL:
        'https://www.wanted.co.kr/events/pre_challenge_fe_21?utm_source=google&utm_medium=sa&utm_campaign=kr_career_edu_web_sa_application&utm_term=%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A9&gad_source=1&gclid=CjwKCAjwxLKxBhA7EiwAXO0R0MkNpopAB9BC9oV7mEfuG4EroljfKnzaCUn1u7i0-6uZfgKLCJqI2RoCTUwQAvD_BwE',
      imageURL: ACTICITY_IMG.ictHanium,
    },
  ]

  return NextResponse.json({ activities: res })
}
