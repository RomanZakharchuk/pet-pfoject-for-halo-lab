import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { rootzReducer } from "./slices/rootz.slice";


const rootReducer = combineReducers( {
    position: rootzReducer
} );

export const setupStore = () => configureStore( {
    reducer: rootReducer
} );