 
import { configureStore } from '@reduxjs/toolkit';
import getUsersReducer from './reducers/GetUsersReducer';
import getAnnouncementsReducer from './reducers/GetAnnouncementsReducer';

const store = configureStore({
  reducer: {
    Users: getUsersReducer,
    Announcements: getAnnouncementsReducer
  }
});

export default store; 
