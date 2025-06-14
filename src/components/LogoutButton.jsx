import { logout } from '../utils/storage'

const LogoutButton = ({ onLogout }) => {
  const handleClick = () => {
    logout()
    onLogout()
  }

  return (
    <button onClick={handleClick} className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700">
      Cerrar Sesión
    </button>
  )
}

export default LogoutButton
