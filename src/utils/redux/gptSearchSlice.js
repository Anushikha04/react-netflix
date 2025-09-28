import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: {
    gptSearchView: false,
  },
  reducers: {
    toggleGPTSearchView: (state) => {
      state.gptSearchView = !state.gptSearchView;
    },
  },
});
export const { toggleGPTSearchView } = gptSearchSlice.actions;
export default gptSearchSlice.reducer;
