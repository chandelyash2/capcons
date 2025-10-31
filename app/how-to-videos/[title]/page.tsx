import React from 'react'

const HowToVideoDetails = async (props: Promise<{ params: { title: string } }>) => {
  const { params } = await props
  const { title } = params
    return (
    <div>
        <h1>How to Video Details: {title}</h1>
    </div>
  )
}

export default HowToVideoDetails