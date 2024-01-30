import {createSlice} from '@reduxjs/toolkit';

/**
 * store -> root reducer(state) -> user slice, order slice
 * state.user.email
 * state.order
 * state.ui.loading
 *
 * action: state를 바꾸는 행위/동작
 * dispatch: 그 action을 실제로 실행하는 함수
 * reducer: action이 실제로 실행되면 state를 바꾸는 로직
 */

const initialState = {
  name: '',
  email: '',
  accessToken: '',
};
const userSlice = createSlice({
  name: 'user',
  initialState,

  // 동기 액션.
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.accessToken = action.payload.accessToken;
    },
  },
  // 비동기 액션.
  extraReducers: builder => {},
});

export default userSlice;
