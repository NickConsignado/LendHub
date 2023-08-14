import { createSlice } from "@reduxjs/toolkit";

export const borrowedSLice = createSlice({
    name: 'borrowedLists',
    initialState: [],
    reducers: {
        setList: (state, action) => {

        }
    }
})

export const {setList} = borrowedSLice.actions