import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    // Slices will be added here
    // auth: authReducer,
    // posts: postsReducer,
    // videos: videosReducer,
    // products: productsReducer,
  },
});

export default store;
