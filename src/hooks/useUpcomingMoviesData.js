import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OPTIONS } from "../utils/const";
import { addUpcomingMovies } from "../utils/redux/moviesSlice";

const useUpcomingMoviesData = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector(store=>store.movies.upcomingMovies)

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
    !upcomingMovies && getUpcomingMoviesData();
  }, []);
};

export default useUpcomingMoviesData;
