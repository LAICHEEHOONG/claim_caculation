import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coverAmount: "",
  firstClaim: "",
  secondClaim: "",
  thirdClaim: "",
  fourthClaim: "",
  fifthClaim: "",
  totalClaim: "",
};

export const claimSlice = createSlice({
  name: "claim",
  initialState,
  reducers: {
    updateCoverAmount: (state, action) => {
      state.coverAmount = action.payload;
    },
    updateFirstClaim: (state, action) => {
      state.firstClaim = action.payload;
    },
    updateSecondClaim: (state, action) => {
      state.secondClaim = action.payload;
    },
    updateThirdClaim: (state, action) => {
      state.thirdClaim = action.payload;
    },
    updateFourthClaim: (state, action) => {
      state.fourthClaim = action.payload;
    },
    updateFifthClaim: (state, action) => {
      state.fifthClaim = action.payload;
    },
    updateTotalClaim: (state) => {
      state.totalClaim =
        (parseFloat(state.firstClaim) || 0) +
        (parseFloat(state.secondClaim) || 0) +
        (parseFloat(state.thirdClaim) || 0) +
        (parseFloat(state.fourthClaim) || 0) +
        (parseFloat(state.fifthClaim) || 0);
    },
    reset: (state) => {
      state.coverAmount = "";
      state.firstClaim = "";
      state.secondClaim = "";
      state.thirdClaim = "";
      state.fourthClaim = "";
      state.fifthClaim = "";
      state.totalClaim = "";
    },
  },
});

export const {
  updateCoverAmount,
  updateFirstClaim,
  updateSecondClaim,
  updateThirdClaim,
  updateFourthClaim,
  updateFifthClaim,
  updateTotalClaim,
  reset
} = claimSlice.actions;

export default claimSlice.reducer;
