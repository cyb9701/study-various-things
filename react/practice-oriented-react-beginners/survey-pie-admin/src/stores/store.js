import { configureStore } from '@reduxjs/toolkit';
import thunk from './middleware/thunk';
import surveyReducer from './survey/surveySlice';

export default configureStore({
  reducer: {
    survey: surveyReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
