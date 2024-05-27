import { createSlice } from '@reduxjs/toolkit';
import { GetAllPrayerRequests } from '../actions/PrayerRequestsAction';

const getPrayerRequestsSlice = createSlice({
  name: 'PrayerRequests',
  initialState: {
    allPrayerRequests: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetAllPrayerRequests.pending, (state) => {
        state.loading = true;
        state.error = null
      })
      .addCase(GetAllPrayerRequests.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.allPrayerRequests = action.payload;
      })
      .addCase(GetAllPrayerRequests.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default getPrayerRequestsSlice.reducer;