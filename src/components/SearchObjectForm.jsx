// src/components/SearchObjectForm.jsx
import React, { useState } from 'react'

const SearchObjectForm = ({ onSearch }) => {
  const [query, setQuery] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (query.trim() !== '') {
      onSearch(query.toUpperCase())
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 mb-6">
      <input
        type="text"
        placeholder="Buscar por IMEI, dominio, motor, cuadro o DNI"
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 w-full"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Buscar
      </button>
    </form>
  )
}

export default SearchObjectForm
