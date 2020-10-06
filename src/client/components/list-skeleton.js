import React from 'react'

function Card() {
  return <div className="list-skeleton__card" />
}

function ListSkeleton() {
  return (
    <div className="list-skeleton" data-testid="list-skeleton">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default ListSkeleton
