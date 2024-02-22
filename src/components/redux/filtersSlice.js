import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filter",
  initialState: {
    filter: "",
  },

  reducers: {
    setFilterValue(state, action) {
      state.filter = action.payload;
    },
  },
});
//  експортуємо генератори екшенів та редюсер
export const { setFilterValue } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
