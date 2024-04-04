import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alert: false,
  alertMessage: "",
};

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    openAlert: (state, action) => {
      state.alert = action.payload;
    },
    setAlertMessage: (state, action) => {
      state.alertMessage = action.payload;
    },
    setAlert: (state, action) => {
      state.alert = action.payload.alert;
      state.alertMessage = action.payload.alertMessage;
    }
  },
});

export const { openAlert, setAlertMessage, setAlert } = alertSlice.actions;

export default alertSlice.reducer;
