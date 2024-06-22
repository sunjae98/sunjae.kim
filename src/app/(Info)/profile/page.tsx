'use client'
import PersonalInfo from '@/app/_components/info/PersonalInfo'
import StackInfo from '@/app/_components/info/StackInfo'
import TechStack from '@/app/_components/info/TechStack'
import TechStackItem from '@/app/_components/info/TechStackItem'
import { API_URL } from '@/app/_constants/urls'
import { useEffect, useState } from 'react'

type Stack = {
  category: string
  items: {
    imgSrc: string
  }[]
}[][]

export default function Page() {
  const [techStackData, setTechStackData] = useState<Stack>([])

  useEffect(() => {
    fetch(`${API_URL}info/profile`)
      .then((response) => response.json())
      .then((data) => {
        setTechStackData(data.stacks)
      })
      .catch((error) => console.error('Error:', error))
  }, [])

  return (
    <div className="flex flex-col items-center px-2 text-white">
      <PersonalInfo
        name="김선재"
        email="sunjae.kim.9844@gmail.com"
        github="https://github.com/sunjae98"
        blog="https://medium.com/@woal9844"
        profileImage="/profile_image.jpg"
      />
      <TechStack>
        <div className="flex flex-col gap-2 md:gap-8 md:flex-row">
          {techStackData.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-2 md:gap-4">
              {column.map((stack, stackIndex) => (
                <StackInfo key={stackIndex} category={stack.category}>
                  {stack.items.map((item, itemIndex) => (
                    <TechStackItem key={itemIndex} imgSrc={item.imgSrc} />
                  ))}
                </StackInfo>
              ))}
            </div>
          ))}
        </div>
      </TechStack>
    </div>
  )
}
