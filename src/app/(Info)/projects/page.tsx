'use client'

import ProjectInfo from '@/app/_components/info/ProjectInfo'
import { API_URL } from '@/app/_constants/urls'
import { useEffect, useState } from 'react'

type Project = {
  title: string
  position: string
  description: string
  date: string
  introduction: string
  github: string
  imageURL: string
}

export default function Page() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    fetch(`${API_URL}info/projects`)
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.projects)
      })
      .catch((error) => console.error('Error:', error))
  }, [])

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="my-4 mb-8 text-3xl font-bold text-white md:text-5xl">Projects</div>
      {projects.map((project, index) => (
        <ProjectInfo
          key={index}
          title={project.title}
          position={project.position}
          description={project.description}
          period={project.date}
          introduction_url={project.introduction}
          github_url={project.github}
          imageURL={project.imageURL}
        />
      ))}
    </div>
  )
}
