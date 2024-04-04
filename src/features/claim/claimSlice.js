import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coverAmount: 0,
  firstClaim: 0,
  secondClaim: 0,
  thirdClaim: 0,
  fourthClaim: 0,
  fifthClaim: 0,
  valueLeft: 0
};

export const claimSlice = createSlice({
  name: "claim",
  initialState,
  reducers: {
    updateCoverAmount: (state, action) => {
      state.coverAmount = parseFloat(action.payload);
    },
    updateFirstClaim: (state, action) => {
      state.firstClaim = parseFloat(action.payload);
    },
    updateSecondClaim: (state, action) => {
      state.secondClaim = parseFloat(action.payload);
    },
    updateThirdClaim: (state, action) => {
      state.thirdClaim = parseFloat(action.payload);
    },
    updateFourthClaim: (state, action) => {
      state.fourthClaim = parseFloat(action.payload);
    },
    updateFifthClaim: (state, action) => {
      state.fifthClaim = parseFloat(action.payload);
    },
    updateValueLeft: (state, action) => {
        state.valueLeft = parseFloat(action.payload);
    }
  },
});

export const {
  updateCoverAmount,
  updateFirstClaim,
  updateSecondClaim,
  updateThirdClaim,
  updateFourthClaim,
  updateFifthClaim,
  updateValueLeft
} = claimSlice.actions;

export default claimSlice.reducer;
