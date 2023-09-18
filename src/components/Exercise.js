import React, { useEffect, useState } from 'react';
import ExerciseCard from '../components/ExerciseCard';
import ExerciseSearch from './ExerciseSearch';

const Exercise = () => {
    const [exercises, setExercises] = useState([]);
    const [numCards, setNumCards] = useState(20);
    const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://exercisedb.p.rapidapi.com/exercises';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '672444eaf8msh8b507bd5de45338p1fdda4jsn1ef9821237db',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setExercises(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const loadMoreCards = () => {
    setNumCards(numCards + 23); // Increase the number of cards to display
  };

  const handleSearch = (query) => {
    const filteredResults = exercises.filter((exercise) =>
      exercise.target.toLowerCase().includes(query.toLowerCase()) ||
      exercise.bodyPart.toLowerCase().includes(query.toLowerCase()) ||
      exercise.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Exercise List</h1>
      
      {/* Add the ExerciseSearch component */}
      <ExerciseSearch onSearch={handleSearch} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {searchResults.length > 0
          ? searchResults.slice(0, numCards).map((exercise) => (
              <ExerciseCard key={exercise.id} exercise={exercise} />
            ))
          : exercises.slice(0, numCards).map((exercise) => (
              <ExerciseCard key={exercise.id} exercise={exercise} />
            ))}
      </div>
      {numCards < (searchResults.length > 0 ? searchResults : exercises).length && (
        <div className="mt-4">
          <button
            onClick={loadMoreCards}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Exercise;





