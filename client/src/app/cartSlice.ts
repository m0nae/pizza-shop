import { createSlice } from "@reduxjs/toolkit";
import type { PizzaI } from "../types";

interface CartState {
  cart: PizzaI[];
}

// cart should be an array full of objects
// each object represents each pizza type
// and they have an "id" property, and a "quantity" property, which indicates how many of that pizza is in the cart

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      // state.cart.filter((item) => )
    },
  },
});

export default cartSlice.reducer;
