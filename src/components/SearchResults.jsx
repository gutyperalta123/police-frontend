// src/components/SearchResults.jsx
import React from 'react'
import ObjectCard from './ObjectCard.jsx'
import { getUsername } from '../utils/storage.js'

const SearchResults = ({ results, onDelete }) => {
  const currentUser = getUsername()
  const isAdmin = currentUser === 'GUSTAVOPERALTA'

  if (!Array.isArray(results)) return null

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {results.map(obj => (
        <ObjectCard key={obj._id} obj={obj} onDelete={onDelete} isAdmin={isAdmin} />
      ))}
    </div>
  )
}

export default SearchResults
