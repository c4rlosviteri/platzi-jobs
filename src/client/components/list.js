import React from 'react'
import shallow from 'zustand/shallow'
import Card from './card'
import Skeleton from './list-skeleton'
import Filters from './filters'
import { useStore } from '../store'

function Wrapper({ preChildren, children, heading, headingTestId }) {
  return (
    <main className="list" id="main">
      {preChildren}
      <h2 className="list__heading" data-testid={headingTestId}>
        {heading}
      </h2>
      {children}
    </main>
  )
}

function List() {
  const [isLoading, isError, results] = useStore(
    (store) => [store.isLoading, store.isError, store.filteredResults],
    shallow,
  )

  if (isError) {
    return (
      <Wrapper
        heading="There was an error while fetching data. Please try again later…"
        headingTestId="heading-error"
      />
    )
  }

  if (isLoading) {
    return (
      <Wrapper heading="Loading…" headingTestId="heading-loading">
        <Skeleton data-testid="list-skeleton" />
      </Wrapper>
    )
  }

  return (
    <Wrapper
      heading={
        results?.length > 0
          ? `Showing ${results.length} available jobs`
          : 'No available jobs'
      }
      headingTestId="heading-results"
      preChildren={<Filters />}
    >
      {results?.length > 0 && (
        <div className="list__grid" data-testid="list-results">
          {results.map((result) => (
            <Card
              company={result.company}
              companyUrl={result.company_url}
              datePosted={result.created_at}
              description={result.description}
              howToApply={result.how_to_apply}
              id={result.id}
              key={result.id}
              location={result.location}
              title={result.title}
              data-testid="result-card"
            />
          ))}
        </div>
      )}
    </Wrapper>
  )
}

export default List
