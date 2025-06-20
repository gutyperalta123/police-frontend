import React, { useEffect, useState } from 'react'
import Login from './Login.jsx'
import AdminPanelView from './views/AdminPanelView.jsx'
import AddObjectView from './views/AddObjectView.jsx'
import SearchObjectView from './views/SearchObjectView.jsx'
import DeleteUserView from './views/DeleteUserView.jsx'
import LogoutButton from './components/LogoutButton.jsx'
import { getToken, getUsername } from './utils/storage.js'

const App = () => {
  const [token, setToken] = useState('')
  const [username, setUsername] = useState('')
  const [view, setView] = useState('add')

  useEffect(() => {
    const storedToken = getToken()
    const storedUsername = getUsername()
    if (storedToken && storedUsername) {
      setToken(storedToken)
      setUsername(storedUsername)
    }
  }, [])

  if (!token) return <Login onLogin={(t, u) => { setToken(t); setUsername(u) }} />

  const isAdmin = username === 'GUSTAVOPERALTA'

  return (
    <div className='p-4 max-w-4xl mx-auto'>
      <header className='mb-4 flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Datos Policiales</h1>
        <LogoutButton onLogout={() => { setToken(''); setUsername('') }} />
      </header>
      <nav className='mb-4 flex gap-2'>
        <button onClick={() => setView('add')} className='btn'>Agregar Objeto</button>
        <button onClick={() => setView('search')} className='btn'>Buscar / Eliminar Objeto</button>
        {isAdmin && (
          <>
            <button onClick={() => setView('admin')} className='btn'>Crear Usuario</button>
            <button onClick={() => setView('deleteuser')} className='btn'>Eliminar Usuario</button>
          </>
        )}
      </nav>
      <main>
        {view === 'add' && <AddObjectView />}
        {view === 'search' && <SearchObjectView />}
        {view === 'admin' && isAdmin && <AdminPanelView />}
        {view === 'deleteuser' && isAdmin && <DeleteUserView />}
      </main>
    </div>
  )
}

export default App
