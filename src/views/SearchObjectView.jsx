import React, { useState } from 'react'
import SearchObjectForm from '../components/SearchObjectForm.jsx'
import SearchResults from '../components/SearchResults.jsx'

const SearchObjectView = () => {
  const [results, setResults] = useState([])

  const buscarObjetos = async query => {
    try {
      const res = await fetch(`https://police-backend-dwup.onrender.com/api/objects/search?q=${query}`)
      const data = await res.json()
      setResults(data)
    } catch (err) {
      setResults([])
    }
  }

  const eliminarObjeto = async id => {
    if (!window.confirm('¿Estás seguro que deseas eliminar este objeto?')) return

    try {
      const res = await fetch(`https://police-backend-dwup.onrender.com/api/objects/${id}`, {
        method: 'DELETE'
      })

      if (res.ok) {
        setResults(prev => prev.filter(obj => obj._id !== id))
      }
    } catch (err) {
      console.error('Error al eliminar', err)
    }
  }

  return (
    <div>
      <SearchObjectForm onSearch={buscarObjetos} />
      <SearchResults results={results} onDelete={eliminarObjeto} />
    </div>
  )
}

export default SearchObjectView
