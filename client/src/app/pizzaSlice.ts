import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import type { PizzaI } from "../types";

export const fetchAllPizzas = createAsyncThunk("pizzas/fetchAll", async () => {
  const response = await fetch("http://localhost:1010/pizzas");
  console.log(response);
  return response.json();
});

interface PizzaState {
  pizzas: PizzaI[];
}

const initialState: PizzaState = {
  pizzas: [],
};

export const pizzaSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllPizzas.fulfilled, (state, action) => {
      state.pizzas.push(...action.payload);
    });
  },
});

export default pizzaSlice.reducer;
