import { useState } from 'react'
import Login from './Login'
import AddObjectView from './views/AddObjectView'
import SearchObjectView from './views/SearchObjectView'
import AdminPanelView from './views/AdminPanelView'
import { getToken, getUsername, clearSession } from './utils/storage'

function App() {
  const [view, setView] = useState('add')
  const token = getToken()
  const username = getUsername()

  const handleLogout = () => {
    clearSession()
    window.location.reload()
  }

  if (!token) return <Login />

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">APLICACIÓN POLICIAL</h1>
        <div>
          <span className="mr-4 font-semibold">{username}</span>
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
            Cerrar sesión
          </button>
        </div>
      </div>

      <div className="flex space-x-4 mb-4">
        <button onClick={() => setView('add')} className="bg-blue-500 text-white px-4 py-2 rounded">
          Agregar objeto
        </button>
        <button onClick={() => setView('search')} className="bg-green-500 text-white px-4 py-2 rounded">
          Buscar / Eliminar
        </button>
        {username === 'GUSTAVOPERALTA' && (
          <button onClick={() => setView('admin')} className="bg-purple-500 text-white px-4 py-2 rounded">
            Administrar usuarios
          </button>
        )}
      </div>

      {view === 'add' && <AddObjectView />}
      {view === 'search' && <SearchObjectView />}
      {view === 'admin' && <AdminPanelView />}
    </div>
  )
}

export default App
