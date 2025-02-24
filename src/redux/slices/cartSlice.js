import { createSlice, nanoid } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.title == action.payload.title
      );

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ itemId: nanoid(), quantity: 1, ...action.payload });
      }
    },
    removeFromCart: (state, action) => {
        console.log("rmv called")
      const existingItem = state.items.find(
        (item) => item.id == action.payload
      );

      console.log(existingItem)
      if (existingItem.quantity > 1) {
        console.log("rmv if called")
        state.items = state.items.map((item) =>
          item.id == action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        console.log("rmv else called")
        state.items = state.items.filter(
          (item) => item.id !== action.payload
        );
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
