import React from 'react'
import Title from './Title'
import Video from './Video'

const BrowseMainContainer = ({movieId, title, overview}) => {
  return (
    <div>
        <Title title={title} overview={overview}/>
        <Video movieId={movieId}/>
    </div>
  )
}

export default BrowseMainContainer