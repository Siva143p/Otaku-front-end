import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSavedAnimes, saveHandler } from "./saveApi";

export const fetchSavedAnimes = createAsyncThunk(
  "filter/fetchSavedAnimes",
  async (_, { getState }) => {
    const state = getState().saved;
    const { lang, media, userId } = state;
    console.log(lang, media, userId);

    const response = await getSavedAnimes("WatchList", userId, lang, media);
    console.log(response);

    return response;
  },
);

const initialState = {
  savedAnimes: [],
  userId: "",
  status: "idel",
  error: null,
  lang: JSON.parse(localStorage.getItem("FilterObj"))?.lang,
  media: JSON.parse(localStorage.getItem("FilterObj"))?.media,
  fav: false,
};

const savedSlice = createSlice({
  name: "saved",
  initialState,
  reducers: {
    setFilterObj(state, action) {
      const { lang, media, fav } = action.payload;
      const filterKeys = {
        lang: lang || state.lang,
        media: media || state.media,
        fav: fav || state.fav,
      };

      console.log(filterKeys);

      localStorage.setItem("FilterObj", JSON.stringify(filterKeys));
    },

    setUserIdSaved(state, action) {
      state.userId = action.payload;
    },

    addAnime(state, action) {
      state.savedAnimes.push(action.payload);
      saveHandler(action.payload._id, "WatchList", state.userId);
    },

    removeAnime(state, action) {
      state.savedAnimes = state.savedAnimes.filter(
        (anime) => anime._id !== action.payload._id,
      );
      saveHandler(action.payload._id, "WatchList", state.userId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSavedAnimes.pending, (state, action) => {
        state.status = "Loading";
      })

      .addCase(fetchSavedAnimes.fulfilled, (state, action) => {
        state.status = "Succeed";
        console.log("Saved Animes Fetched in the SavedSlice: ", action.payload);

        state.savedAnimes = action.payload;
      })

      .addCase(fetchSavedAnimes.rejected, (state, action) => {
        state.status = "Failed";
        state.error = action.error.message;
      });
  },
});

export const isAnimeExists = (state, animeId) =>
  state.saved.savedAnimes.some((anime) => anime.id === animeId);

export const selectSavedAnimes = (state) => state.saved.savedAnimes;
export const selectSavedLang = (state) => state.saved.lang;
export const selectSavedMedia = (state) => state.saved.media;
export const { addAnime, removeAnime, setFilterObj, setUserIdSaved } =
  savedSlice.actions;
export default savedSlice.reducer;
