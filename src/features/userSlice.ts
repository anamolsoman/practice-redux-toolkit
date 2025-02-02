import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../interfaces";

const initialState: userList = {
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, payload) => {
      state.users = payload.payload;
    },
    addUser: (state) => {
      state.users = [...state.users, { name: "sagar" }];
    },
  },
});

export const { addUser, setUsers } = userSlice.actions;
export default userSlice.reducer;
