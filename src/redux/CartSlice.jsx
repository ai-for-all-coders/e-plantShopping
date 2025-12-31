import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0
  },
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existing = state.items.find(i => i.id === item.id);

      state.totalQuantity++;
      state.totalAmount += item.price;

      if (existing) {
        existing.quantity++;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existing = state.items.find(i => i.id === id);
      if (!existing) return;

      state.totalQuantity--;
      state.totalAmount -= existing.price;

      if (existing.quantity === 1) {
        state.items = state.items.filter(i => i.id !== id);
      } else {
        existing.quantity--;
      }
    },
    deleteItem(state, action) {
      const id = action.payload;
      const existing = state.items.find(i => i.id === id);
      if (!existing) return;

      state.totalQuantity -= existing.quantity;
      state.totalAmount -= existing.price * existing.quantity;
      state.items = state.items.filter(i => i.id !== id);
    }
  }
});

export const { addToCart, removeFromCart, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
