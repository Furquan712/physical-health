import React, { useState } from 'react';

const ExerciseSearch = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Pass the search query to the parent component (e.g., App)
    onSearch(searchQuery);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search by target, body part, or exercise"
        className="border border-gray-300 rounded-lg py-2 px-4 w-full"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2"
      >
        Search
      </button>
    </div>
  );
};

export default ExerciseSearch;
