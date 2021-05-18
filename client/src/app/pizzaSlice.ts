import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PizzaI } from "../types";

export const fetchAllPizzas = createAsyncThunk("pizzas/fetchAll", async () => {
  const response = await fetch("http://localhost:1010/pizzas");
  return response.json();
});

interface PizzaSliceState {
  allPizzas: PizzaI[];
  cart: PizzaI[];
  isCartOpen: boolean;
}

const initialState: PizzaSliceState = {
  allPizzas: [],
  cart: [],
  isCartOpen: false,
};

// a general function that can check the existence of a certain pizza
// either within the cart, or within the list of all fetched pizzas
export function existsWithin(
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
        state.isCartOpen = true;
      }
    },

    removeFromCart: (state, action) => {
      let item = existsWithin("cart", state, action);
      if (item) {
        let updatedCart = state.cart.filter(
          (pizza) => pizza.id !== action.payload
        );

        state.cart = updatedCart;
        if (state.cart.length < 1) {
          state.isCartOpen = false;
        }
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

        // if this was the last item in the cart, automatically close the cart
        if (state.cart.length < 1) {
          state.isCartOpen = false;
        }
      }
    },

    toggleCart: (state, action) => {
      // if there's no payload/no cart state is specified,
      // just default to standard toggling behavior
      if (!action.payload) {
        if (state.isCartOpen === true) {
          state.isCartOpen = false;
        } else {
          state.isCartOpen = true;
        }

        // if a payload/cart state is specified, use it
      } else {
        state.isCartOpen = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllPizzas.fulfilled, (state, action) => {
      state.allPizzas = [...action.payload];
      state.allPizzas.forEach((pizza) => {
        // set a default quantity to 0 for all pizzas when first fetched
        pizza.quantity = 0;
      });
    });
  },
});

export const {
  addToCart,
  toggleCart,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
} = pizzaSlice.actions;

export default pizzaSlice.reducer;
