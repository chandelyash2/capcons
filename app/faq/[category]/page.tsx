import React from 'react'

const CategoryDetails = async (props: Promise<{ params: { category: string } }>) => {
  const { params } = await props
  const { category } = params
  return (
    <div>Category Details: {category}</div>
  )
}

export default CategoryDetails