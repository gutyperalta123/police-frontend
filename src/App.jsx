import React, { useState, useEffect } from 'react'
import Login from './Login.jsx'
import AddObjectView from './views/AddObjectView.jsx'
import SearchObjectView from './views/SearchObjectView.jsx'
import AdminPanelView from './views/AdminPanelView.jsx'
import DeleteUserView from './views/DeleteUserView.jsx'
import LogoutButton from './components/LogoutButton.jsx'
import { getToken, getUsername } from './utils/storage.js'

const App = () => {
  const [token, setToken] = useState(getToken())
  const [view, setView] = useState('add')

  const username = getUsername()

  useEffect(() => {
    setToken(getToken())
  }, [])

  const isAdmin = username === 'GUSTAVOPERALTA'

  if (!token) {
    return <Login onLogin={() => setToken(getToken())} />
  }

  return (
    <div>
      <header className="bg-gray-900 text-white p-4 flex justify-between">
        <h1 className="text-xl font-bold">APLICACIÓN POLICIAL</h1>
        <div className="flex items-center gap-2">
          <span className="font-bold">{username}</span>
          <LogoutButton onLogout={() => setToken(null)} />
        </div>
      </header>

      <div className="p-4 flex flex-wrap gap-2">
        <button className="btn-blue" onClick={() => setView('add')}>Agregar objeto</button>
        <button className="btn-green" onClick={() => setView('search')}>Buscar / Eliminar</button>
        {isAdmin && (
          <>
            <button className="btn-purple" onClick={() => setView('admin')}>Administrar usuarios</button>
            <button className="btn-red" onClick={() => setView('deleteUser')}>Eliminar usuarios</button>
          </>
        )}
      </div>

      <main className="p-4">
        {view === 'add' && <AddObjectView />}
        {view === 'search' && <SearchObjectView />}
        {view === 'admin' && isAdmin && <AdminPanelView />}
        {view === 'deleteUser' && isAdmin && <DeleteUserView />}
      </main>
    </div>
  )
}

export default App
