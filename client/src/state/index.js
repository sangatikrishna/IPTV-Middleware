import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",

};

export const globalSlice = createSlice({
  name: "global",//first config name
  initialState,//initial state(object)
  //reducer functions (objects)
  reducers: {
    setMode: (state) => {
        //mutating the state
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});
export const { setMode } = globalSlice.actions;
export default globalSlice.reducer;
