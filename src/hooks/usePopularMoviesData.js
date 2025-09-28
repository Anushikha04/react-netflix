import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { OPTIONS } from "../utils/const";
import { addPopularMovies } from "../utils/redux/moviesSlice";

const usePopularMoviesData = () => {
  const dispatch = useDispatch();
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
    getPopularMoviesData();
  }, []);
};

export default usePopularMoviesData;
