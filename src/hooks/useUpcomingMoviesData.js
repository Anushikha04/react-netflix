import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { OPTIONS } from "../utils/const";
import { addUpcomingMovies } from "../utils/redux/moviesSlice";

const useUpcomingMoviesData = () => {
  const dispatch = useDispatch();
  const getUpcomingMoviesData = async () => {
    const movies = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      OPTIONS
    );
    const json = await movies.json();
    // console.log(json.results);
    dispatch(addUpcomingMovies(json.results));
  };
  useEffect(() => {
    getUpcomingMoviesData();
  }, []);
};

export default useUpcomingMoviesData;
