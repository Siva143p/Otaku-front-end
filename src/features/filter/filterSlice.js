import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { fetchByAlphabets, fetchSaved, fetchPopular } from "./APIwithfilter"; // Assuming you have multiple APIs
import { fetchByAlphabets, fetchSaved } from "./APIwithfilter";

// Async thunks for different pages
export const fetchAnimesByAlphabet = createAsyncThunk(
  "filter/fetchAnimesByAlphabet",
  async (_, { getState }) => {
    const state = getState().filter;
    const { lang, media } = state;
    const response = await fetchByAlphabets(lang, media);
    return response;
  },
);

// export const fetchSavedAnimes = createAsyncThunk(
//   "filter/fetchSavedAnimes",
//   async (_, { getState }) => {
//     const state = getState().filter;
//     const { lang, media, userId } = state;
//     console.log(lang, media, userId);

//     const response = await fetchSaved(userId, lang, media);
//     return response;
//   },
// );

export const fetchPopularAnimes = createAsyncThunk(
  "filter/fetchPopularAnimes",
  async (_, { getState }) => {
    const state = getState().filter;
    const { lang, media } = state;
    const response = await fetchPopular(lang, media);
    return response;
  },
);

const initialState = {
  Animes: [],
  lang: "all",
  media: "all",
  userId: "66e181f173f79fe09d22f09b",
  page: "alphabets", // default page
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterKey(state, action) {
      const { lang, media, page } = action.payload;

      const obj = {
        lang: lang || state.lang,
        media: media || state.media,
        onlyFav: false, // Placeholder for future use
      };

      state.lang = obj.lang;
      state.media = obj.media;
      state.page = page || state.page;

      // Persist filter settings to localStorage
      // localStorage.setItem("FilterObj", JSON.stringify(obj));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnimesByAlphabet.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAnimesByAlphabet.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log("Fetched Animes:", action.payload);
        state.Animes = action.payload;
      })
      .addCase(fetchAnimesByAlphabet.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // .addCase(fetchSavedAnimes.pending, (state) => {
      //   state.status = "loading";
      // })
      // .addCase(fetchSavedAnimes.fulfilled, (state, action) => {
      //   state.status = "succeeded";
      //   console.log("Fetched Animes:", action.payload);
      //   state.Animes = action.payload;
      // })
      // .addCase(fetchSavedAnimes.rejected, (state, action) => {
      //   state.status = "failed";
      //   state.error = action.error.message;
      // })
      .addCase(fetchPopularAnimes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPopularAnimes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.Animes = action.payload;
      })
      .addCase(fetchPopularAnimes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Selectors
export const selectFilterLang = (state) => state.filter.lang;
export const selectFilterMedia = (state) => state.filter.media;
export const selectFilteredAnimes = (state) => state.filter.Animes;
export const selectStatus = (state) => state.filter.status;
export const selectPage = (state) => state.filter.page;

// Actions
export const { setFilterKey } = filterSlice.actions;

export default filterSlice.reducer;
