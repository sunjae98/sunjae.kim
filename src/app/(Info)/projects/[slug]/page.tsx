'use client'
import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import Image from 'next/image'

export default function Page({ params }: { params: { slug: string } }) {
  const [markdown, setMarkdown] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetch(`/readme/${params.slug}.md`)
      .then((response) => response.text())
      .then((text) => {
        setMarkdown(text)
        setIsLoading(true)
      })
  }, [params.slug])

  return (
    <div>
      <div className="my-8 flex justify-center items-center px-6">
        {isLoading ? (
          <div className="w-[85%] md:w-2/3 flex flex-col px-4 py-8 border-2 border-white rounded-xl">
            <ReactMarkdown
              rehypePlugins={[rehypeHighlight, rehypeRaw, remarkGfm]}
              components={{
                // 커스텀
                h1: ({ node, ...props }) => (
                  <h1 className="text-3xl font-bold text-white my-4" {...props} />
                ),
                h2: ({ node, ...props }) => <h2 className="text-2xl  text-white my-4" {...props} />,
                h3: ({ node, ...props }) => <h3 className="text-xl text-white my-4" {...props} />,
                p: ({ node, ...props }) => <p className="my-2 text-white text-base" {...props} />,
                a: ({ node, ...props }) => (
                  <a className="text-blue-600 hover:underline " {...props} />
                ),
                ul: ({ node, ...props }) => <ul className="list-disc text-white my-4" {...props} />,
                li: ({ node, ...props }) => <li className="ml-4" {...props} />,
                blockquote: ({ node, ...props }) => (
                  <blockquote
                    className="border-l-4  pl-4 py-2 italic bg-gray-600 text-black"
                    {...props}
                  />
                ),
                code: ({ node, ...props }) => (
                  <code className="bg-gray-600 rounded p-1 text-sm" {...props} />
                ),
                th: ({ node, ...props }) => (
                  <th className="bg-neutral-800 p-2" {...props} align="center" />
                ),
                tr: ({ node, ...props }) => (
                  <tr className="bg-neutral-700 text-center" {...props} />
                ),
                td: ({ node, ...props }) => <td className="p-2" {...props} />,
              }}>
              {markdown}
            </ReactMarkdown>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center">
            <Image src="/loading.gif" alt="loading" width={200} height={200} />
            <div className="font-bold text-xl">Please wait a moment...</div>
          </div>
        )}
      </div>
    </div>
  )
}
