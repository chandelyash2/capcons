import React from 'react'

const BlogDetails = async (props: Promise<{ params: { title: string } }>) => {
  const { params } = await props
  const { title } = params
  return (
    <div>Dlog Details: {title}</div>
  )
}

export default BlogDetails