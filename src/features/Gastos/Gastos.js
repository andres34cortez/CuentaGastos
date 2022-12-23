import { createSlice } from "@reduxjs/toolkit";
import swal from "sweetalert";

const initialState = {
  items: [
    {
      id: "1",
      price: "874213",
      description: "comida",
    },
    {
      id: "2",
      price: "10",
      description: "otro",
    },
  ],
  loading:false,
  error:""
};

export const gastosSlice = createSlice({
  name: "gastos",
  initialState,
  reducers: {
    addGasto: (state, action) => {   
      state.loading = true;
      state.error = "";
      
      /* state.items.push(action.payload);
       swal("Gasto Agregado!", "", "success");*/ //en este caso el payload es un objeto
    },
    deleteGasto: (state, action) => {
      const gastoFound = state.items.find((gasto) => gasto.id === action.payload); // en este caso es un strin que es el ID
      if (gastoFound) {
        state.items.splice(state.items.indexOf(gastoFound), 1);
        swal("Gasto Eliminado !", "", "warning");
      }
    },
    editGasto: (state, action) => {
      const gastoFound = state.items.find((gasto) => gasto.id === action.payload.id);
      if (!gastoFound) return;
      state.items.forEach((gasto) => {
        if (gasto.id === action.payload.id) {
          gasto.price = action.payload.price;
        }
      });
    },
  },

});
export const { addGasto, deleteGasto, editGasto } = gastosSlice.actions;
export default gastosSlice.reducer;
