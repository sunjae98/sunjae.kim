'use client'
import ActivityInfo from '@/app/_components/info/ActivityInfo'
import { API_URL } from '@/app/_constants/urls'
import { useEffect, useState } from 'react'

type Activity = {
  title: string
  activityType: string
  description: string
  where: string
  period: string
  result: string
  moreInfoURL: string
  imageURL: string
}

export default function Page() {
  const [activities, setActivities] = useState<Activity[]>([])

  useEffect(() => {
    fetch(`${API_URL}info/activities`)
      .then((response) => response.json())
      .then((data) => {
        setActivities(data.activities)
      })
      .catch((error) => console.error('Error:', error))
  }, [])

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-4 mb-8 text-3xl font-bold text-white md:text-5xl">Activities</div>
      {activities.map((activity, index) => (
        <ActivityInfo
          key={index}
          title={activity.title}
          activityType={activity.activityType}
          description={activity.description}
          period={activity.period}
          moreInfoURL={activity.moreInfoURL}
          imageURL={activity.imageURL}
        />
      ))}
    </div>
  )
}
