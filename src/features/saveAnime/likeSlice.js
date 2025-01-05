import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likedAnimes: JSON.parse(localStorage.getItem("LikedAnimes")) || [],
};

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    addLike(state, action) {
      state.likedAnimes.push(action.payload);
      localStorage.setItem("LikedAnimes", JSON.stringify(state.likedAnimes));
    },

    removeLike(state, action) {
      state.likedAnimes = state.likedAnimes.filter(
        (anime) => anime.id !== action.payload.id
      );
      localStorage.setItem("LikedAnimes", JSON.stringify(state.likedAnimes));
    },
  },
});

export const selectLikedAnimes = (state) => state.like.likedAnimes;
export const { addLike, removeLike } = likeSlice.actions;
export default likeSlice.reducer;
