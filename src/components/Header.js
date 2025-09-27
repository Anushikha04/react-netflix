import React from 'react'
import {NETFLIX_LOGO} from '../utils/const'

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b bg-black z-10 w-screen">
        <img src={NETFLIX_LOGO} alt="netflix-logo" className="w-44"/>
    </div>
  )
}

export default Header