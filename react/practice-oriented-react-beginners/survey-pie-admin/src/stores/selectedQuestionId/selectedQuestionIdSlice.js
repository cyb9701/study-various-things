import { createSlice } from '@reduxjs/toolkit';

export const selectedQuestionIdSlice = createSlice({
  name: 'selectedQuestionId',
  initialState: {
    data: null,
  },
  reducers: {
    setSelectedQuestionId: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setSelectedQuestionId } = selectedQuestionIdSlice.actions;

export default selectedQuestionIdSlice.reducer;
