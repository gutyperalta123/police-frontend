import { useState, useEffect } from 'react'
import { getToken, getUsername } from './utils/storage'
import Login from './Login'
import LogoutButton from './components/LogoutButton'
import AddObjectView from './views/AddObjectView'
import SearchObjectView from './views/SearchObjectView'
import CreateUserForm from './components/CreateUserForm'
import DeleteUserView from './views/DeleteUserView'

const App = () => {
  const [usuario, setUsuario] = useState(null)
  const [vista, setVista] = useState('add')

  useEffect(() => {
    const token = getToken()
    const user = getUsername()
    if (token && user) {
      setUsuario(user)
    }
  }, [])

  if (!usuario) return <Login onLogin={setUsuario} />

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-between items-center p-4 bg-white shadow">
        <h1 className="text-xl font-bold">Aplicación Policial</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setVista('add')}
            className={`px-4 py-2 rounded ${vista === 'add' ? 'bg-black text-white' : 'bg-gray-200'}`}
          >
            Agregar Objeto
          </button>
          <button
            onClick={() => setVista('search')}
            className={`px-4 py-2 rounded ${vista === 'search' ? 'bg-black text-white' : 'bg-gray-200'}`}
          >
            Buscar/Eliminar
          </button>
          {usuario === 'GUSTAVOPERALTA' && (
            <>
              <button
                onClick={() => setVista('create')}
                className={`px-4 py-2 rounded ${vista === 'create' ? 'bg-black text-white' : 'bg-gray-200'}`}
              >
                Crear Usuario
              </button>
              <button
                onClick={() => setVista('deleteUser')}
                className={`px-4 py-2 rounded ${vista === 'deleteUser' ? 'bg-black text-white' : 'bg-gray-200'}`}
              >
                Eliminar Usuario
              </button>
            </>
          )}
          <LogoutButton onLogout={() => setUsuario(null)} />
        </div>
      </div>

      {vista === 'add' && <AddObjectView />}
      {vista === 'search' && <SearchObjectView />}
      {vista === 'create' && usuario === 'GUSTAVOPERALTA' && <CreateUserForm />}
      {vista === 'deleteUser' && usuario === 'GUSTAVOPERALTA' && <DeleteUserView />}
    </div>
  )
}

export default App
