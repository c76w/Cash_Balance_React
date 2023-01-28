import { createSlice } from "@reduxjs/toolkit";

export const balanceSlice = createSlice({
    // Set the name
    name: 'balance',

    // Set the initial state of value
    initialState: {
        value: 0,
    },

    reducers: {

        // Withdraw action - decrease the value (balance) by the amount specified
        withdraw: (state, action) => {
            state.value -= action.payload;
        },

        // Deposit action - increase the value (balance) by the amount specified
        deposit: (state, action) => {
            state.value += action.payload;
        },

        // Add interest action - add 5% to the value (balance)
        addinterest: (state) => {
            state.value = state.value + (state.value * 0.05)
        },

        // Add charges action - deduct 15% from the value (balance)
        charges: (state) => {
            state.value = state.value - (state.value * 0.15)
        }
    }
});

export const {withdraw, deposit, addinterest, charges} = balanceSlice.actions;

export default balanceSlice.reducer;