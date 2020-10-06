import React, { useState } from 'react'
import { useStore } from '../store'
import ClearQuery from './clear-query'
import Input from './input'
import PopularSearch from './popular-search'

function SearchForm() {
  const [value, setValue] = useState('')
  const [query, setQuery] = useState('')
  const fetchResults = useStore((store) => store.fetchResults)

  const fetchDescription = (query) => {
    setQuery(query)
    fetchResults({ description: query })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchDescription(value)
    setValue('')
  }

  const clearQuery = () => {
    setQuery('')
    fetchDescription('')
  }

  return (
    <div role="search" className="search-form">
      <div className="search-form__container">
        <form data-testid="search-form" onSubmit={handleSubmit}>
          <Input
            id="search-input"
            label="Search for your dream programming job"
            value={value}
            onChange={setValue}
          />
        </form>
        <div className="search-form__grid">
          <PopularSearch
            emoji="🐍"
            emojiAlt="Python"
            label="Python"
            onClick={() => fetchDescription('Python')}
          />
          <PopularSearch
            emoji="💅🏻"
            emojiAlt="Nail Polish"
            label="Frontend"
            onClick={() => fetchDescription('Frontend')}
          />
          <PopularSearch
            emoji="☁️"
            emojiAlt="Cloud"
            label="Serverless"
            onClick={() => fetchDescription('Serverless')}
          />
          <PopularSearch
            emoji="📱"
            emojiAlt="Mobile phone"
            label="Mobile"
            onClick={() => fetchDescription('Mobile')}
          />
        </div>
        {query && <ClearQuery query={query} onClick={clearQuery} />}
      </div>
    </div>
  )
}

export default SearchForm
