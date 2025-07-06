import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("fetch-data", async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (response.status !== 200) {
      throw new Error("API fetch Failed");
    }
    const products = await response.json();
    return { products };
  } catch (error) {
    return { error };
  }
});

let initialState = {
  cartItem: [],
  loading: false,
  error: null,
  Products: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const isDuplicate = state.cartItem.find(
        (item) => parseInt(item.id) === parseInt(action.payload.id)
      );
      if (isDuplicate) {
        isDuplicate.quantity++;
      } else {
        state.cartItem.push(action.payload);
      }
    },
    incrementQuantity: (state, action) => {
      state.cartItem.map((item) => {
        item.id === action.payload.item.id ? item.quantity++ : item;
      });
    },
    decrementQuantity: (state, action) => {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex !== -1) {
        if (state.cartItem[itemIndex].quantity > 1) {
          state.cartItem[itemIndex].quantity -= 1;
        } else {
          state.cartItem.splice(itemIndex, 1);
        }
      }
    },
    removeItem: (state, action) => {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload
      );
      // console.log(itemIndex)
      state.cartItem.splice(itemIndex, 1);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.Products = action.payload.products;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.payload.error;
      });
  },
});
export const { addItem, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;
export default cartSlice.reducer;
