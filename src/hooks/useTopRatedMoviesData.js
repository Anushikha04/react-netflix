import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { OPTIONS } from "../utils/const";
import { addTopRatedMovies } from "../utils/redux/moviesSlice";

const useTopRatedMoviesData = () => {
  const dispatch = useDispatch();
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
    getTopRatedMoviesData();
  }, []);
};

export default useTopRatedMoviesData;
