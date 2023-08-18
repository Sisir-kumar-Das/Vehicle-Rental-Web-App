import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import vehicleReducer from '../features/vehicles/vehicleSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    vehicles: vehicleReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
