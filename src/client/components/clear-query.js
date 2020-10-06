import React from 'react'

function ClearQuery({ query, onClick }) {
  return (
    <div className="clear-query">
      <div className="clear-query__chip">
        Results for: {query}
        <button
          aria-label={`Clear results for ${query}`}
          onClick={onClick}
          className="clear-query__button"
          data-testid="chip"
        />
      </div>
    </div>
  )
}

export default ClearQuery
