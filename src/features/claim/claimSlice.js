import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coverAmount: 0,
  firstYear: 0,
  secondYear: 0,
  thirdYear: 0,
  fourthYear: 0,
  fifthYear: 0,
};

export const claimSlice = createSlice({
  name: "claim",
  initialState,
  reducers: {
    updateCoverAmount: (state, action) => {
        state.coverAmount = action.payload
    },
    // updateSize: (state, action) => {
    //   if (action.payload !== 0) {
    //     state.size = action.payload / 50;
    //   } else {
    //     state.size = 0;
    //   }

    //   const { width, height } = getElementDimensionsInMM();
    //   state.width = width.toFixed(0);
    //   state.height = height.toFixed(0);
    // },
  },
});

export const { updateCoverAmount } = claimSlice.actions;

export default claimSlice.reducer;
