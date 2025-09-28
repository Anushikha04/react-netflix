import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: "language",
    initialState: {
        language: "en"
    },
    reducers : {
        selectLanguage: (state,action) => {
            state.language = action.payload
        }
    }
})
export const {selectLanguage} = languageSlice.actions
export default languageSlice.reducer