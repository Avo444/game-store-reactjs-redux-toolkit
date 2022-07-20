import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import gameReducer from '../features/games/gameSlice';

export const store = configureStore({
  reducer: {
    game: gameReducer,
    cart: cartReducer
  },
});
