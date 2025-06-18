import React, { useState, useEffect } from 'react'
import Login from './Login'
import AddObjectView from './views/AddObjectView.jsx'
import SearchObjectView from "./views/SearchObjectView"
import AdminPanelView from './views/AdminPanelView.jsx'
import DeleteUserView from "./views/DeleteUserView"
import { getToken, getUsername } from './utils/storage'

const App = () => {
  const [token, setToken] = useState(getToken())
  const [username, setUsername] = useState(getUsername())
  const [vista, setVista] = useState('agregar')

  const isAdmin = username === 'GUSTAVOPERALTA'

  useEffect(() => {
    setToken(getToken())
    setUsername(getUsername())
  }, [])

  if (!token) return <Login onLogin={setToken} />

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">APLICACIÓN POLICIAL</h1>
        <p className="font-semibold">{username}</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => setVista('agregar')}
        >
          Agregar objeto
        </button>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          onClick={() => setVista('buscar')}
        >
          Buscar / Eliminar
        </button>
        {isAdmin && (
          <button
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            onClick={() => setVista('admin')}
          >
            Administrar usuarios
          </button>
        )}
        <button
          onClick={() => {
            localStorage.clear()
            window.location.reload()
          }}
          className="ml-auto bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Cerrar sesión
        </button>
      </div>

      {vista === 'agregar' && <AddObjectView />}
      {vista === 'buscar' && <SearchObjectView />}
      {vista === 'admin' && isAdmin && <AdminPanelView />}
    </div>
  )
}

export default App
