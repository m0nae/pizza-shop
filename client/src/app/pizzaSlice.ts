import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import type { PizzaI } from "../types";

export const fetchAllPizzas = createAsyncThunk("pizzas/fetchAll", async () => {
  const response = await fetch("http://localhost:1010/pizzas");
  console.log(response);
  return response.json();
});

// interface CartPizzaI extends PizzaI {
//   quantity: number;
// }

interface PizzaSliceState {
  allPizzas: PizzaI[];
  cart: PizzaI[];
}

const initialState: PizzaSliceState = {
  allPizzas: [],
  cart: [],
};

// declare let state: PizzaSliceState;
// declare let action: { payload: any; type: string };

function existsWithin(
  stateType: "cart" | "allPizzas",
  state: PizzaSliceState,
  action: {
    payload: any;
    type: string;
  }
) {
  let item = state[stateType].find((pizza) => pizza.id === action.payload);

  if (item) {
    return item;
  }
}

export const pizzaSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (!existsWithin("cart", state, action)) {
        let item = existsWithin("allPizzas", state, action)!;
        state.cart.push({ ...item, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      let item = existsWithin("cart", state, action);
      if (item) {
        let updatedCart = state.cart.filter(
          (pizza) => pizza.id !== action.payload
        );

        state.cart = updatedCart;
      }
    },

    increaseQuantity: (state, action) => {
      let item = existsWithin("cart", state, action);
      if (item) {
        item.quantity++;
      }
    },

    decreaseQuantity: (state, action) => {
      let item = existsWithin("cart", state, action);

      // if the quantity is decreased to less than one, remove it from the cart altogether
      if (item && item.quantity > 1) {
        item.quantity--;
      } else if (item && item.quantity <= 1) {
        // repeated code from above
        let updatedCart = state.cart.filter(
          (pizza) => pizza.id !== action.payload
        );

        state.cart = updatedCart;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllPizzas.fulfilled, (state, action) => {
      state.allPizzas.push(...action.payload);
      state.allPizzas.forEach((pizza) => {
        pizza.quantity = 0;
      });
    });
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
} = pizzaSlice.actions;

export default pizzaSlice.reducer;
