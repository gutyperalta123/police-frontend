import React, { useState } from 'react'
import { API_URL } from '../utils/storage'

const SearchObjectForm = ({ onSearch }) => {
  const [query, setQuery] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (query.trim()) {
      onSearch(query.trim().toUpperCase())
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Buscar por tipo, número de serie, IMEI, dominio o DNI"
        className="p-2 border border-gray-300 rounded w-full sm:w-3/4"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Buscar
      </button>
    </form>
  )
}

export default SearchObjectForm
