import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isSeller: false,
  seller: null,
  sellers: [],
  error: null,
};

const sellerSlice = createSlice({
  name: "seller",
  initialState,
  reducers: {
    loadSellerRequest: (state) => {
      state.isLoading = true;
    },
    loadSellerSuccess: (state, action) => {
      state.isSeller = true;
      state.isLoading = false;
      state.seller = action.payload;
    },
    loadSellerFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isSeller = false;
    },

    // get all sellers ---admin
    getAllSellersRequest: (state) => {
      state.isLoading = true;
    },
    getAllSellersSuccess: (state, action) => {
      state.isLoading = false;
      state.sellers = action.payload;
    },
    getAllSellersFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    clearErrors: (state) => {
      state.error = null;
    },
  },
});

export const {
  loadSellerRequest,
  loadSellerSuccess,
  loadSellerFail,
  getAllSellersRequest,
  getAllSellersSuccess,
  getAllSellersFail,
  clearErrors,
} = sellerSlice.actions;

export default sellerSlice.reducer;
