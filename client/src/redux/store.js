import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice.js';

export default configureStore({
  reducer: {
    tasks: taskReducer,
  },
});