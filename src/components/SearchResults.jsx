import React from 'react'
import ObjectCard from './ObjectCard.jsx'
import { getUser } from '../utils/storage.js'

const SearchResults = ({ results, onDelete }) => {
  const isAdmin = getUser() === 'GUSTAVOPERALTA'

  if (!results || results.length === 0) {
    return <p className="text-center mt-4">No se encontraron resultados.</p>
  }

  return (
    <div className="mt-4">
      {results.map(objeto => (
        <ObjectCard
          key={objeto._id}
          objeto={objeto}
          onDelete={isAdmin ? onDelete : null}
        />
      ))}
    </div>
  )
}

export default SearchResults
