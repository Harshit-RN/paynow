
import { createSlice } from '@reduxjs/toolkit';

const splashSlice = createSlice({
  name: 'splash',
  initialState: {
    data: null,
  },
  reducers: {
    setAppData: (state, action) => {
    //  console.log('Inside reducer: ======>', action.payload);
      state.data = action.payload;
    },
  },
});

export const { setAppData } = splashSlice.actions;
export default splashSlice.reducer;
