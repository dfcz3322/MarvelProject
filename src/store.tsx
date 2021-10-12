import { configureStore } from '@reduxjs/toolkit';
import marvelAppState from './reducer';

export default configureStore({
  reducer: marvelAppState,
});
