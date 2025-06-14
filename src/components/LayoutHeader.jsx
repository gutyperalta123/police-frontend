import React from 'react';

const LayoutHeader = ({ onNavigate, currentPage }) => {
  const getButtonClasses = (pageName) => {
    return `px-4 py-2 rounded-lg transition-colors ${
      currentPage === pageName
        ? 'bg-black text-white shadow-md'
        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
    }`;
  };

  return (
    <header className="w-full bg-white shadow-lg p-4 flex justify-center space-x-4 rounded-b-xl">
      <button
        onClick={() => onNavigate('add')}
        className={getButtonClasses('add')}
      >
        Agregar Objeto
      </button>
      <button
        onClick={() => onNavigate('search')}
        className={getButtonClasses('search')}
      >
        Buscar/Eliminar
      </button>
    </header>
  );
};

export default LayoutHeader;