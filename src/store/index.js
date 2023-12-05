import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import promocodesReducer from './reducers/promocodes.js';

const rootReducer = combineReducers({
  promocodesData: promocodesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
