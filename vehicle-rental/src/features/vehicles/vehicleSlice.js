import { createSlice } from '@reduxjs/toolkit';
import {
  addProduct,
  getAllProducts,
  getProduct,
  rentProduct,
} from './vehicleActions';

const initialState = {
  vehicles: [],
  error: null,
  success: false,
  loading: false,
  currentProduct: null,
};

const vehicleSlice = createSlice({
  name: 'vehicle',
  initialState,
  reducers: {},
  extraReducers: {
    // add product
    [addProduct.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [addProduct.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.vehicles.push(payload);
    },
    [addProduct.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // get products
    [getAllProducts.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getAllProducts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.vehicles = payload;
    },
    [getAllProducts.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // get a product
    [getProduct.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getProduct.fulfilled]: (state, { payload }) => {
      state.loading = false;
      // console.log('product: ', payload);
      state.currentProduct = payload;
    },
    [getProduct.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // rent a product
    [rentProduct.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [rentProduct.fulfilled]: (state, { payload }) => {
      state.loading = false;
      // console.log('product: ', payload);
      state.currentProduct = null;
    },
    [rentProduct.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default vehicleSlice.reducer;
