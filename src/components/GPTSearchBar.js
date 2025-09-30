import React from "react";
import lang from "../utils/languageConst";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import client from "../utils/openai";
import {OPTIONS} from '../utils/const'
import { addGPTMovies } from "../utils/redux/gptSearchSlice";

const GPTSearchBar = () => {
  const searchText = useRef();
  const selectedLang = useSelector((store) => store.language.language);
  const dispatch = useDispatch();

  const handleSearchClick = async () => {
    // const response = await client.responses.create({
    //   model: "gpt-4o",
    //   instructions:
    //     "You are a movie recommendation expert that gives recommendation of 5 movies that are comma separated like the example result given ahead. example result: koi mil gaya, gadar, saiyara, hum aapke hai kaun, hum sath sath hai",
    //   input: searchText.current.value,
    // });

    // console.log(response.output_text);
    // const movies = response?.output_text?.split(",")

    const movies = ["andaz apna apna","padosan","jaane bhi do yaaro","saudagar","sholay"]

    const tmdbMoviesPromisesArray = movies.map(movie => fetchTMDBMovies(movie))
    const tmdbMovies =await Promise.all(tmdbMoviesPromisesArray)
    console.log(tmdbMovies)
    dispatch(addGPTMovies({movies: tmdbMovies, searchResults: movies}))
  };

  const fetchTMDBMovies = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' +movie + '&include_adult=false&language=en-US&page=1', OPTIONS)
    const json = await data.json();
    return json.results
  }
  return (
    <div className="flex justify-center pt-[10%]">
      <form
        className="bg-black grid grid-cols-12 w-1/2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder={lang[selectedLang].gptSearchPlaceholder}
          className="p-4 m-4 col-span-9"
          ref={searchText}
        />
        <button
          className="bg-red-700 text-white rounded-lg col-span-3 m-4 py-2 px-4"
          onClick={handleSearchClick}
        >
          {lang[selectedLang].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
