// src/components/LogoutButton.jsx
import React from 'react'
import { clearStorage } from '../utils/storage'

const LogoutButton = ({ onLogout }) => {
  const handleLogout = () => {
    clearStorage()
    onLogout()
  }

  return (
    <button
      onClick={handleLogout}
      className="bg-red-600 hover:bg-red-700 text-white font-semibold py-1 px-3 rounded ml-2"
    >
      Cerrar Sesión
    </button>
  )
}

export default LogoutButton
