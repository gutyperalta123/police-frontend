import React, { useState } from 'react'
import SearchObjectForm from '../components/SearchObjectForm.jsx'
import SearchResults from '../components/SearchResults.jsx'
import LayoutHeader from '../components/LayoutHeader.jsx'

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
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <LayoutHeader />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Buscar Objeto</h2>
        <SearchObjectForm onSearch={buscarObjetos} />
        <SearchResults results={results} onDelete={eliminarObjeto} />
      </div>
    </div>
  )
}

export default SearchObjectView
