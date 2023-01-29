import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    screenPosition: false
};

const rootzSlice = createSlice( {
    name: 'rootzSlice',
    initialState,
    reducers: {
        fixScreenPosition: ( state, action ) => {
            state.screenPosition = action.payload;
        }
    }
} );

export const { reducer: rootzReducer, actions: { fixScreenPosition } } = rootzSlice;
export const rootzActions = { fixScreenPosition };