import React from 'react'

function PopularSearch({ onClick, label, emoji, emojiAlt }) {
  return (
    <button
      className="popular-search"
      onClick={onClick}
      aria-label={`Search for ${label} results`}
    >
      <span role="img" aria-label={emojiAlt}>
        {emoji}
      </span>
      {label}
    </button>
  )
}

export default PopularSearch
