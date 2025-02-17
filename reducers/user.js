import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    user: {token: null, nickname: null, likedEvents: null, email: null},
    //likedArray:[]
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.user.token = action.payload.token;
      state.value.user.email = action.payload.email;
      state.value.user.nickname = action.payload.nickname;
      state.value.user.likedEvents = action.payload.likedEvents;
    },
    logout: (state) => {
      state.value.user.token = null
      state.value.user.email = null
      state.value.user.likedEvents = null
      state.value.user.nickname = null
    }
    // likeEvent: (state, action) => {
    //   state.value.user.likedArray = state.value.user.likedArray.push(action.payload)
    // },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
