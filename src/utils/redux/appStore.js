import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import moviesReducer from './moviesSlice'
import gptReducer from './gptSearchSlice'
import languageReducer from './languageSlice'

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gptSearch: gptReducer,
        language: languageReducer
    }
})

export default appStore