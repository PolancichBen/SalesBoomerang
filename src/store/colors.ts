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
  selectedColor: string;
}

const generateInitialState = (): ColorState => ({
  colors: [],
  selectedColor: '',
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
    setSelectedColor: (state: ColorState, action: PayloadAction<string>) => {
      state.selectedColor = action.payload;
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(fetchColors.fulfilled, (state: ColorState, action: any) => {
      state.colors = action.payload.colors;
    });
  },
});

// SELECTORS
export const colorsSelectors = (state: RootState): Array<string> =>
  state.colorReducer.colors;
export const selectedColorSelector = (state: RootState): string =>
  state.colorReducer.selectedColor;

// EXPORTS
export const colorReducer = colorSlice.reducer;
export const { setColors, setSelectedColor } = colorSlice.actions;
