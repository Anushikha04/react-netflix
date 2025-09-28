import React from 'react'
import lang from '../utils/languageConst'
import { useSelector } from 'react-redux'

const GPTSearchBar = () => {
  const selectedLang = useSelector(store => store.language.language)
  return (
    <div className='flex justify-center pt-[10%]'>
      <form className="bg-black grid grid-cols-12 w-1/2">
        <input type="text" placeholder={lang[selectedLang].gptSearchPlaceholder} className='p-4 m-4 col-span-9'/>
        <button className='bg-red-700 text-white rounded-lg col-span-3 m-4 py-2 px-4'>{lang[selectedLang].search}</button>
      </form>
    </div>
  )
}

export default GPTSearchBar