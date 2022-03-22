import { RootState } from './index';
import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';

export interface colorState {
  colors: Array<string>;
}

const generateInitialState = (): colorState => ({
  colors: [],
});

// ASYNC THUNKS

// REDUCERS
const colorSlice: Slice = createSlice({
  name: 'colors',
  initialState: generateInitialState(),
  reducers: {
    setColors: (state: colorState, action: PayloadAction<Array<string>>) => {
      state.colors = action.payload;
    },
  },
  extraReducers: (builder: any) => {},
});

// SELECTORS
export const colorsSelectors = (state: RootState) => state.colorReducer.colors;

// EXPORTS
export const colorReducer = colorSlice.reducer;
export const { setColors } = colorSlice.actions;
