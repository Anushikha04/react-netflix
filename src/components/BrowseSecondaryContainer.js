import React from 'react'
import { MovieList } from './MovieList'
import { useSelector } from 'react-redux'

const BrowseSecondaryContainer = () => {
  const movies = useSelector(store => store.movies)
  console.log(movies)
  return movies && (
    <div className='bg-black'>
      <div className='-mt-52 pl-12 relative z-20'>
        <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies}/>
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
      </div>
    </div>
  )
}

export default BrowseSecondaryContainer