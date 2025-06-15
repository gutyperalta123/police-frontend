// frontend/src/App.jsx
import { useEffect, useState } from 'react'
import Login from './Login'
import AddObjectForm from './components/AddObjectForm'
import SearchObjectForm from './components/SearchObjectForm'
import SearchObjectResults from './components/SearchObjectResults'
import CreateUserForm from './components/CreateUserForm'
import DeleteUserForm from './components/DeleteUserForm'
import { getToken, clearToken } from './utils/storage'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!getToken())
  const [role, setRole] = useState('')
  const [results, setResults] = useState([])

  const handleLogout = () => {
    clearToken()
    setIsAuthenticated(false)
    setRole('')
  }

  const handleLogin = (userRole) => {
    setIsAuthenticated(true)
    setRole(userRole)
  }

  const handleDeleteResult = (id) => {
    setResults((prev) => prev.filter((item) => item._id !== id))
  }

  useEffect(() => {
    if (!getToken()) {
      setIsAuthenticated(false)
    }
  }, [])

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />
  }

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Aplicación Policial</h1>
        <button
          onClick={handleLogout}
          className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Cerrar sesión
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <AddObjectForm />
        </div>
        <div>
          <SearchObjectForm onResults={setResults} />
          <SearchObjectResults results={results} onDelete={handleDeleteResult} />
        </div>
      </div>

      {role === 'admin' && (
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <CreateUserForm />
          <DeleteUserForm />
        </div>
      )}
    </div>
  )
}

export default App
