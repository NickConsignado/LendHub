import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import { borrowedSLice } from "./borrowedListReducer"


const rootReducer = combineReducers({
    borrowedLists: borrowedSLice.reducer
})

const store = configureStore({
    reducer: rootReducer
})

export default store