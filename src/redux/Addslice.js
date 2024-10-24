import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        addBooks: (state, action) => {
            
            state.books.push(action.payload)
            console.log("book added");
            
        },
       
    },
});

export const { addBooks } = productSlice.actions;

export default bookSlice.reducer;
