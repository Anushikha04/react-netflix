import React from 'react'

const Title = ({title, overview}) => {
  return (
    <div className="pt-[18%] w-screen aspect-video absolute bg-gradient-to-r from-black">
        <h1 className="text-2xl font-bold text-white p-2 m-2">{title}</h1>
        <p className="text-xl w-1/4 text-white p-2 m-2">{overview}</p>
        <div className='p-2 m-2'>
            <button className="bg-white text-black rounded-lg p-4 hover:bg-opacity-70 text-xl font-bold">Play</button>
            <button className="bg-gray-600 text-white rounded-lg mx-2 p-4 hover:bg-opacity-70 text-xl font-bold">More Info</button>
        </div>
    </div>
  )
}

export default Title