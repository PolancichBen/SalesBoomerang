import { RootState } from './index';
import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  Slice,
} from '@reduxjs/toolkit';
import Axios from 'axios';

export interface ColorState {
  colors: Array<string>;
}

const generateInitialState = (): ColorState => ({
  colors: [],
});

// ASYNC THUNKS
export const fetchColors = createAsyncThunk(
  'colors',
  async (): Promise<any> => {
    let response;
    try {
      response = await Axios.get('http://localhost:3002/data', {
        headers: {
          Accept: '*/*',
          'Access-Control-Allow-Origin': 'true',
        },
      });
      return response.data;
    } catch (e) {
      console.error('Error fetching Colors:', e);
      return [];
    }
  }
);

// REDUCERS
const colorSlice: Slice = createSlice({
  name: 'colors',
  initialState: generateInitialState(),
  reducers: {
    setColors: (state: ColorState, action: PayloadAction<Array<string>>) => {
      state.colors = action.payload;
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(fetchColors.fulfilled, (state: ColorState, action: any) => {
      console.log('Action', action);
      state.colors = action.payload.colors;
    });
  },
});

// SELECTORS
export const colorsSelectors = (state: RootState) => state.colorReducer.colors;

// EXPORTS
export const colorReducer = colorSlice.reducer;
export const { setColors } = colorSlice.actions;
