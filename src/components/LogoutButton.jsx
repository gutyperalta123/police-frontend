import { clearSession } from '../utils/storage'

const LogoutButton = () => {
  const handleLogout = () => {
    clearSession()
    window.location.reload()
  }

  return (
    <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded">
      Cerrar sesión
    </button>
  )
}

export default LogoutButton
