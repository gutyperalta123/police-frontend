import React from 'react';
import AddObjectForm from '../components/AddObjectForm';

const AddObjectView = ({ onAddObject }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <AddObjectForm onAddObject={onAddObject} />
    </div>
  );
};

export default AddObjectView;