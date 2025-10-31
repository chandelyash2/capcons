import React from 'react'

const JobDetails = async (props: Promise<{ params: { slug: string } }>) => {
    const { params } = await props
    const { slug } = params
  return (
   <div>Job Details: {slug}</div>
  )
}

export default JobDetails