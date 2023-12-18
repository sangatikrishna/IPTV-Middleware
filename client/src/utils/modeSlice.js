import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  userId: "",
};

export const globalSlice = createSlice({
  name: "global",//first config name
  initialState,//initial state(object)
  //reducer functions (objects)
  reducer: {
    setMode: (state) => {
        //mutating the state
        
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});
export const { setMode } = globalSlice.actions;
export default globalSlice.reducer;
