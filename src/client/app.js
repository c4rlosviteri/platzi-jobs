import React, { useEffect } from 'react'
import Header from './components/header'
import List from './components/list'
import SearchForm from './components/search-form'
import SkipTo from './components/skip-to'
import { useStore } from './store'

function App() {
  const [fetchResults] = useStore((store) => [store.fetchResults])

  useEffect(() => {
    fetchResults()
  }, [fetchResults])

  return (
    <>
      <SkipTo />
      <Header />
      <SearchForm />
      <List />
    </>
  )
}

export default App
