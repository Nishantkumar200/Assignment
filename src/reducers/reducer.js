import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  FAQs: [],
  videoSeries:{},
  tags: [],
  lng:'english'  // default
};

const singlePageReducer = createSlice({
  name: "single-page-redcuer",
  initialState,
  reducers: {
    setFAQList: (state, action) => {
      return {
        ...state,
        FAQs: action.payload,
      };
    },

    setVideoServies: (state, action) => {
      return {
        ...state,
        videoSeries: action.payload,
      };
    },

    setTags: (state, action) => {
      return {
        ...state,
        tags: action.payload,
      };
    },

    updateLng: (state, action) => {
      return {
        ...state,
        lng: action.payload
      }
    },
  },
});

export const { setFAQList, setVideoServies, setTags ,updateLng} =
  singlePageReducer.actions;
export default singlePageReducer.reducer;
