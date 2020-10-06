import React, { useEffect, useState } from 'react'
import shallow from 'zustand/shallow'
import { useStore } from '../store'
import Checkbox from './checkbox'
import Dropdown from './dropdown'

function Filters() {
  const [locationsShown, filterResults] = useStore(
    (store) => [store.locationsShown, store.filterResults],
    shallow,
  )
  const [location, setLocation] = useState('')
  const [sortBy, setSortBy] = useState('')
  const [isRemote, setIsRemote] = useState(false)

  useEffect(() => {
    filterResults({ location, sortBy, isRemote })
  }, [location, sortBy, isRemote])

  return (
    <div className="filters" data-testid="filters-results">
      <Dropdown
        options={locationsShown}
        onChange={(value) => setLocation(value)}
        placeholder="All locations"
        label="Location"
        id="location"
        disabled={isRemote}
        value={location}
      />
      <Dropdown
        options={['Latest', 'Oldest']}
        onChange={setSortBy}
        placeholder="Default"
        label="Sort by"
        id="sort-by"
        value={sortBy}
      />
      <Checkbox
        label="Remote only"
        onChange={(value) => {
          setLocation('')
          setIsRemote(value)
        }}
        value={isRemote}
      />
    </div>
  )
}

export default Filters
