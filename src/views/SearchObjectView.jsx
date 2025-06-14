import { useState } from 'react'
import SearchObjectForm from '../components/SearchObjectForm'
import SearchResults from '../components/SearchResults'

const SearchObjectView = () => {
  const [results, setResults] = useState([])

  return (
    <div>
      <SearchObjectForm setResults={setResults} />
      <SearchResults results={results} />
    </div>
  )
}

export default SearchObjectView
