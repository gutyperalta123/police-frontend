import React, { useState } from 'react';

const SearchObjectForm = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-xl shadow-lg max-w-md mx-auto my-8 space-y-4">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Buscar Objeto</h2>
      <input
        type="text"
        placeholder="Buscar por elemento, marca, serie, etc."
        value={searchTerm}
        onChange={handleChange}
        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
      />
      <button
        type="submit"
        className="w-full mt-4 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors text-lg font-semibold shadow-md"
      >
        Buscar
      </button>
    </form>
  );
};

export default SearchObjectForm;