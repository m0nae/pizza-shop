import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import type { PizzaI } from "../types";

export const fetchAllPizzas = createAsyncThunk("pizzas/fetchAll", async () => {
  const response = await fetch("http://localhost:1010/pizzas");
  console.log(response);
  return response.json();
});

interface CartPizzaI extends PizzaI {
  quantity: number;
}

interface PizzaSliceState {
  allPizzas: PizzaI[];
  cart: CartPizzaI[];
}

const initialState: PizzaSliceState = {
  allPizzas: [],
  cart: [],
};

export const pizzaSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.allPizzas.find((pizza) => pizza.id === action.payload);

      if (item) {
        state.cart.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      // remove from cart
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllPizzas.fulfilled, (state, action) => {
      state.allPizzas.push(...action.payload);
    });
  },
});

export const { addToCart, removeFromCart } = pizzaSlice.actions;

export default pizzaSlice.reducer;
