import React, { useState } from 'react'

import ObjectCard from './ObjectCard'
import { getUsername } from '../utils/storage'

const SearchResults = ({ results, onDelete }) => {
  const isAdmin = getUsername() === 'GUSTAVOPERALTA'

  return (
    <div className="mt-6">
      {results.length === 0 ? (
        <p className="text-center text-gray-600">No se encontraron resultados.</p>
      ) : (
        results.map(obj => (
          <ObjectCard key={obj._id} obj={obj} onDelete={onDelete} isAdmin={isAdmin} />
        ))
      )}
    </div>
  )
}

export default SearchResults
