
// import { createSlice } from '@reduxjs/toolkit';
// import { LoginRequest } from '../actions/LoginAction';

// const LoginSlice = createSlice({
//   name: 'authUser',
//   initialState: {
//     loggedInUser: [],
//     loading: false,
//     error: null,
//     loggedin:false
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(LoginRequest.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//         state.loggedin =false
//       })
//       .addCase(LoginRequest.fulfilled, (state, action) => {
//         state.loading = false;
//         state.loggedin =true
//         state.loggedInUser = action.payload;
//       })
//       .addCase(LoginRequest.rejected, (state, action) => {
//         state.loading = false;
//         state.loggedin =false
//         state.error = action.error.message;
//       });
//   },
// });

// export default LoginSlice.reducer;