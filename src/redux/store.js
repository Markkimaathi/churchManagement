 
import { configureStore } from '@reduxjs/toolkit';
import getUsersReducer from './reducers/GetUsersReducer';

const store = configureStore({
  reducer: {
    Users: getUsersReducer
  }
});

export default store; 
