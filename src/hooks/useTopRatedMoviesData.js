import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OPTIONS } from "../utils/const";
import { addTopRatedMovies } from "../utils/redux/moviesSlice";

const useTopRatedMoviesData = () => {
  const dispatch = useDispatch();
   const topRatedMovies = useSelector(store => store.movies.topRatedMovies)
  const getTopRatedMoviesData = async () => {
    const movies = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      OPTIONS
    );
    const json = await movies.json();
    // console.log(json.results);
    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    !topRatedMovies && getTopRatedMoviesData();
  }, []);
};

export default useTopRatedMoviesData;
