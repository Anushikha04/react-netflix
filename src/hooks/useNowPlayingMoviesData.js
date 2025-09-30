import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OPTIONS } from "../utils/const";
import { addNowPlayingMovies } from "../utils/redux/moviesSlice";

const useNowPlayingMoviesData = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(store=>store.movies.nowPlayingMovies)
  const getNowPlayingMoviesData = async () => {
    const movies = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      OPTIONS
    );
    const json = await movies.json();
    // console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMoviesData();
  }, []);
};

export default useNowPlayingMoviesData;
