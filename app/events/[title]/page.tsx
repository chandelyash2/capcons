import React from 'react'

const EventDetails = async (props: Promise<{ params: { title: string } }>) => {
  const { params } = await props
  const { title } = params
    return (
    <div>
        <h1>Event Details: {title}</h1>
    </div>
  )
}

export default EventDetails