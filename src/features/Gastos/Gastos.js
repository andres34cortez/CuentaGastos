import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Gasto 1",
    description: "Descripcion gasto 1",
    completed: false,
  },
  {
    id: "2",
    title: "Gasto 2",
    description: "Descripcion gasto 2",
    completed: false,
  },
];

export const gastosSlice = createSlice({
  name: "gastos",
  initialState,
  reducers: {
    addGasto: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const {addGasto} = gastosSlice.actions;
export default gastosSlice.reducer;
