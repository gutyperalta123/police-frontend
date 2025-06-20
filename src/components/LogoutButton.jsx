import React from 'react'
import { clearStorage } from '../utils/storage'

const LogoutButton = ({ onLogout }) => {
  const handleLogout = () => {
    clearStorage()
    onLogout()
  }

  return (
    <button onClick={handleLogout} className="btn-red">
      Cerrar sesión
    </button>
  )
}

export default LogoutButton
