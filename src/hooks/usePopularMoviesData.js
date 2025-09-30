import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OPTIONS } from "../utils/const";
import { addPopularMovies } from "../utils/redux/moviesSlice";

const usePopularMoviesData = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(store => store.movies.popularMovies)
  const getPopularMoviesData = async () => {
    const movies = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      OPTIONS
    );
    const json = await movies.json();
    // console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    !popularMovies && getPopularMoviesData();
  }, []);
};

export default usePopularMoviesData;
