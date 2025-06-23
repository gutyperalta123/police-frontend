import React, { useState, useEffect } from 'react'
import SearchObjectForm from '../components/SearchObjectForm.jsx'
import SearchResults from '../components/SearchResults.jsx'
import { getToken, getUser } from '../utils/storage.js'

const SearchObjectView = () => {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    const usuario = getUser()
    if (usuario && usuario.username === 'GUSTAVOPERALTA') {
      setIsAdmin(true)
    } else {
      setIsAdmin(false)
    }
  }, [])

  const buscarObjetos = async query => {
    if (!query) return
    setLoading(true)
    try {
      const res = await fetch(`https://police-backend-dwup.onrender.com/api/objects/search?q=${query}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
      const data = await res.json()
      if (res.ok) {
        setResults(data)
      } else {
        setResults([])
      }
    } catch (err) {
      alert('Error de conexión con el servidor')
      setResults([])
    } finally {
      setLoading(false)
    }
  }

  const eliminarObjeto = async id => {
    if (!isAdmin) return
    if (!window.confirm('¿Estás seguro que deseas eliminar este objeto?')) return
    try {
      const res = await fetch(`https://police-backend-dwup.onrender.com/api/objects/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
      if (res.ok) {
        setResults(prev => prev.filter(obj => obj._id !== id))
      }
    } catch (err) {
      console.error('Error al eliminar el objeto:', err)
    }
  }

  return (
    <div className="p-4">
      <SearchObjectForm onSearch={buscarObjetos} />
      {loading ? (
        <p className="text-center text-gray-600 mt-4">Buscando objetos...</p>
      ) : (
        <SearchResults results={results} onDelete={isAdmin ? eliminarObjeto : null} />
      )}
    </div>
  )
}

export default SearchObjectView
