import React from 'react'
import {IMAGE_POSTER} from '../utils/const'

const MovieCard = ({posterPath}) => {
  return posterPath && (
    <div className='w-48 pr-4'>
        <img src={IMAGE_POSTER + posterPath} alt="movie card logo"/>
    </div>
  )
}

export default MovieCard