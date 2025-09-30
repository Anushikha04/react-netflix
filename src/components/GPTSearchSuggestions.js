import React from 'react'
import { useSelector } from 'react-redux'
import { MovieList } from './MovieList'

const GPTSearchSuggestions = () => {
  const {gptSearchResults, gptSearchMovies}= useSelector(store => store.gptSearch)
  if(!gptSearchResults) return
  return (
    <div className='p-4 m-4 bg-black bg-opacity-80'>
      <div>
        {gptSearchResults.map((movie, index) => <MovieList key={movie} title={movie} movies={gptSearchMovies[index]}/>)}
      </div>
    </div>
  )
}

export default GPTSearchSuggestions