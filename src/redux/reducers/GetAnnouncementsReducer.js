
import { createSlice } from '@reduxjs/toolkit';
import { GetAllAnnouncements } from '../actions/AnnouncementsAction';

const getAnnouncementsSlice = createSlice({
  name: 'Announcements',
  initialState: {
    allAnnouncements: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetAllAnnouncements.pending, (state) => {
        state.loading = true;
        state.error = null
      })
      .addCase(GetAllAnnouncements.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.allAnnouncements = action.payload;
      })
      .addCase(GetAllAnnouncements.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default getAnnouncementsSlice.reducer;