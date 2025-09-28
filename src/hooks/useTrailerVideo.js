import { useEffect } from "react"
import { OPTIONS } from "../utils/const"
import { useDispatch } from "react-redux"
import {addMovieTrailer} from '../utils/redux/moviesSlice'

const useTrailerVideo = (movieId) => {
    const dispatch = useDispatch();
    const getTrailerData = async () => {
       const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos',OPTIONS)
       const json = await data.json()

       const movieTrailers = json.results.filter(trailer => trailer.type === "Trailer")
       const movieTrailer = movieTrailers[0]
       dispatch(addMovieTrailer(movieTrailer))   
    }
    useEffect(() => {
        getTrailerData()
    },[])
}
export default useTrailerVideo