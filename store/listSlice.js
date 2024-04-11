import { createSlice } from "@reduxjs/toolkit";

let counter = 1;

export const listSlice = createSlice({
  name: "list",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push({ id: counter++, itemText: action.payload, complete: false });
    },

    deleteItem: (state, action) => {
      return state.filter((item) => item.id != action.payload);
    },

    toggleComplete: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index != -1) {
        state[index].complete = !state[index].complete;
      }
    },
  },
});

export const { addItem, deleteItem, toggleComplete } = listSlice.actions;
export default listSlice.reducer;
