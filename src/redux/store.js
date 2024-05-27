 
import { configureStore } from '@reduxjs/toolkit';
import getUsersReducer from './reducers/GetUsersReducer';
import getAnnouncementsReducer from './reducers/GetAnnouncementsReducer';
import GetPrayerRequestsReducer from './reducers/GetPrayerRequestsReducer';

const store = configureStore({
  reducer: {
    Users: getUsersReducer,
    Announcements: getAnnouncementsReducer,
    PrayerRequests: GetPrayerRequestsReducer
  }
});

export default store; 
