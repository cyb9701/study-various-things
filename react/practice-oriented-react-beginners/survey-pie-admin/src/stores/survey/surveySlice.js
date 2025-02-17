import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  loadding: false,
  error: null,
};

export const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    setSurvey: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loadding = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setTitle: (state, action) => {
      state.data.title = action.payload;
    },
    addQuestion: (state, action) => {
      const type = action.payload;

      let options = {};
      switch (type) {
        case 'text':
        case 'textarea':
          options = {
            max: 20,
            placeholder: '',
          };
          break;

        case 'select':
          options = {
            max: 1,
            items: ['가', '나', '다'],
          };
          break;
      }

      state.data.questions.push({
        title: 'Untitled',
        desc: '',
        type: type,
        required: true,
        options: options,
      });
    },
    moveUpQuestion: (state, action) => {
      const index = action.payload;
      if (index === 0) return;

      const temp = state.data.questions[index];
      state.data.questions[index] = state.data.questions[index - 1];
      state.data.questions[index - 1] = temp;
    },
    moveDownQuestion: (state, action) => {
      const index = action.payload;
      if (index === state.data.questions.length - 1) return;

      const temp = state.data.questions[index];
      state.data.questions[index] = state.data.questions[index + 1];
      state.data.questions[index + 1] = temp;
    },
    deleteQuestion: (state, action) => {
      state.data.questions.splice(action.payload, 1);
    },
    setQuestion: (state, action) => {
      const { index, data } = action.payload;
      state.data.questions[index] = data;
    },
  },
});

export const {
  setSurvey,
  setLoading,
  setError,
  setTitle,
  addQuestion,
  moveUpQuestion,
  moveDownQuestion,
  deleteQuestion,
  setQuestion,
} = surveySlice.actions;

export default surveySlice.reducer;
