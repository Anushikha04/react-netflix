import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: {
    gptSearchView: false,
    gptSearchResults: null,
    gptSearchMovies: null
  },
  reducers: {
    toggleGPTSearchView: (state) => {
      state.gptSearchView = !state.gptSearchView;
    },
    addGPTMovies: (state,action) => {
      const {movies, searchResults} = action.payload
      state.gptSearchResults = searchResults
      state.gptSearchMovies = movies
    }
  },
});
export const { toggleGPTSearchView, addGPTMovies } = gptSearchSlice.actions;
export default gptSearchSlice.reducer;
