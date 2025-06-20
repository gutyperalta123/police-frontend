import React from 'react'
import ObjectCard from './ObjectCard.jsx'
import { getUsername } from '../utils/storage'

const SearchResults = ({ results, onDelete }) => {
  const isAdmin = getUsername() === 'GUSTAVOPERALTA'

  return (
    <div className="mt-4 space-y-4">
      {results.map(obj => (
        <ObjectCard key={obj._id} objeto={obj} onDelete={isAdmin ? onDelete : null} />
      ))}
    </div>
  )
}

export default SearchResults
