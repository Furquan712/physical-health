import React, { useState } from 'react';

const ExerciseSearch = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    // Pass the search query to the parent component (e.g., App) as the user types
    onSearch(query);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search by target, body part, or exercise"
        className="border border-gray-300 rounded-lg py-2 px-4 w-full"
        value={searchQuery}
        onChange={handleSearchChange} // Trigger search as the user types
      />
    </div>
  );
};

export default ExerciseSearch;
