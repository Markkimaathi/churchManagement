import { createSlice } from '@reduxjs/toolkit';
import { GetAllEvents } from '../actions/EventsAction';

const getEventsSlice = createSlice({
    name: 'Events',
    initialState: {
      allEvents: [],
      loading: false,
      error: null
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(GetAllEvents.pending, (state) => {
          state.loading = true;
          state.error = null
        })
        .addCase(GetAllEvents.fulfilled, (state, action) => {
          state.loading = false;
          state.error = false;
          state.allEvents = action.payload;
        })
        .addCase(GetAllEvents.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  export default getEventsSlice.reducer;