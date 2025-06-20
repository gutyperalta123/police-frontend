import React, { useState, useEffect } from 'react'
import Login from './Login.jsx'
import AddObjectView from './views/AddObjectView.jsx'
import SearchObjectView from './views/SearchObjectView.jsx'
import AdminPanelView from './views/AdminPanelView.jsx'
import { getToken, getUsername } from './utils/storage.js'

function App() {
  const [token, setToken] = useState(null)
  const [username, setUsername] = useState('')

  useEffect(() => {
    const savedToken = getToken()
    const savedUsername = getUsername()
    if (savedToken) {
      setToken(savedToken)
      setUsername(savedUsername)
    }
  }, [])

  const handleLogin = (token) => {
    setToken(token)
    setUsername(getUsername())
  }

  const handleLogout = () => {
    setToken(null)
    setUsername('')
    localStorage.clear()
  }

  if (!token) {
    return <Login onLogin={handleLogin} />
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-4 font-bold">APLICACIÓN POLICIAL</h1>
      <div className="mb-4">
        <span className="font-semibold">{username}</span>
        <button onClick={handleLogout} className="ml-4 px-4 py-1 bg-red-500 text-white rounded">Cerrar sesión</button>
      </div>

      <div className="section">
        <AddObjectView />
      </div>
      <div className="section">
        <SearchObjectView username={username} />
      </div>

      {username === 'GUSTAVOPERALTA' && (
        <div className="section">
          <AdminPanelView />
        </div>
      )}
    </div>
  )
}

export default App
