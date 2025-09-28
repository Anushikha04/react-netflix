import React from "react";
import Header from "./Header";
import useNowPlayingMoviesData from "../hooks/useNowPlayingMoviesData";
import BrowseMainContainer from "./BrowseMainContainer";
import BrowseSecondaryContainer from "./BrowseSecondaryContainer";
import { useSelector } from "react-redux";
import usePopularMoviesData from '../hooks/usePopularMoviesData';
import useUpcomingMoviesData from '../hooks/useUpcomingMoviesData';
import useTopRatedMoviesData from '../hooks/useTopRatedMoviesData';

const Browse = () => {
  useNowPlayingMoviesData();
  usePopularMoviesData();
  useUpcomingMoviesData();
  useTopRatedMoviesData();
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  if (!movies) return;

  const mostPopularMovie = movies.reduce((acc, cur) => {
    return cur.popularity > acc.popularity ? cur : acc;
  }, movies[0]);
  console.log(mostPopularMovie);

  const {id, original_title, overview} = mostPopularMovie

  return (
    <div>
      <Header />
      <BrowseMainContainer movieId={id} title={original_title} overview={overview} />
      <BrowseSecondaryContainer />
    </div>
  );
};

export default Browse;
