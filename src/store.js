import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './states/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})