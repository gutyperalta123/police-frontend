import React, { useState } from 'react'

const SearchObjectForm = ({ onSearch }) => {
  const [query, setQuery] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    onSearch(query.toUpperCase())
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Buscar por palabra, número de serie, DNI, etc."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="input"
      />
      <button type="submit" className="btn-blue">Buscar</button>
    </form>
  )
}

export default SearchObjectForm
