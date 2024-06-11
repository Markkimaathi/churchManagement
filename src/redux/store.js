 import { configureStore } from '@reduxjs/toolkit';
import getUsersReducer from './reducers/GetUsersReducer';
import getAnnouncementsReducer from './reducers/GetAnnouncementsReducer';
import GetPrayerRequestsReducer from './reducers/GetPrayerRequestsReducer';
import GetEventsReducer from './reducers/GetEventsReducer';
import GetMembersReducer from './reducers/GetMembersReducer';
import GetClergiesReducer from './reducers/GetClergiesReducer';

const store = configureStore({
  reducer: {
    Users: getUsersReducer,
    Announcements: getAnnouncementsReducer,
    PrayerRequests: GetPrayerRequestsReducer,
    Events: GetEventsReducer,
    Members: GetMembersReducer,
    Clergies: GetClergiesReducer
  }
});

export default store; 
