import React from "react";
import Header from "./Header";
import useNowPlayingMoviesData from "../hooks/useNowPlayingMoviesData";
import BrowseMainContainer from "./BrowseMainContainer";
import BrowseSecondaryContainer from "./BrowseSecondaryContainer";
import { useSelector } from "react-redux";
import usePopularMoviesData from "../hooks/usePopularMoviesData";
import useUpcomingMoviesData from "../hooks/useUpcomingMoviesData";
import useTopRatedMoviesData from "../hooks/useTopRatedMoviesData";
import GPTSearchPage from "./GPTSearchPage";

const Browse = () => {
  useNowPlayingMoviesData();
  usePopularMoviesData();
  useUpcomingMoviesData();
  useTopRatedMoviesData();
  const isGPTSearchView = useSelector((store) => store.gptSearch.gptSearchView);
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  if (!movies) return;

  const mostPopularMovie = movies.reduce((acc, cur) => {
    return cur.popularity > acc.popularity ? cur : acc;
  }, movies[0]);

  const { id, original_title, overview } = mostPopularMovie;

  return (
    <div>
      <Header />
      {isGPTSearchView && <GPTSearchPage />}
      {!isGPTSearchView && (
        <>
          <BrowseMainContainer
            movieId={id}
            title={original_title}
            overview={overview}
          />
          <BrowseSecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
