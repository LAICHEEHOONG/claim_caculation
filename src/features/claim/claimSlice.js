import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coverAmount: "",
  firstClaim: "",
  secondClaim: "",
  thirdClaim: "",
  fourthClaim: "",
  fifthClaim: "",
  valueLeft: "",
};

export const claimSlice = createSlice({
  name: "claim",
  initialState,
  reducers: {
    updateCoverAmount: (state, action) => {
      let toNum = parseFloat(action.payload);
      if (!toNum) {
        toNum = 0;
      }
      state.coverAmount = parseFloat(toNum);
    },
    updateFirstClaim: (state, action) => {
      let toNum = parseFloat(action.payload);
      if (!toNum) {
        toNum = 0;
      }
      state.firstClaim = parseFloat(toNum);
    },
    updateSecondClaim: (state, action) => {
      let toNum = parseFloat(action.payload);
      if (!toNum) {
        toNum = 0;
      }
      state.secondClaim = parseFloat(toNum);
    },
    updateThirdClaim: (state, action) => {
      let toNum = parseFloat(action.payload);
      if (!toNum) {
        toNum = 0;
      }
      state.thirdClaim = parseFloat(toNum);
    },
    updateFourthClaim: (state, action) => {
      let toNum = parseFloat(action.payload);
      if (!toNum) {
        toNum = 0;
      }
      state.fourthClaim = parseFloat(toNum);
    },
    updateFifthClaim: (state, action) => {
      let toNum = parseFloat(action.payload);
      if (!toNum) {
        toNum = 0;
      }
      state.fifthClaim = parseFloat(toNum);
    },
    updateClaim: (state, action) => {},
    updateValueLeft: (state, action) => {
      let toNum = parseFloat(action.payload);
      if (!toNum) {
        toNum = 0;
      }
      state.valueLeft = parseFloat(toNum);
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
  updateValueLeft,
} = claimSlice.actions;

export default claimSlice.reducer;
