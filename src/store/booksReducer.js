import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
    name: "books",
    initialState: [],
    reducers: {
        setBookDetails: (state, action) => {

        }
    }
})

export const { setBookDetails } = booksSlice.actions