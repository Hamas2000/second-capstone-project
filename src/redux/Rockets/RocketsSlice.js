import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'https://api.spacexdata.com/v4/rockets';

export const getDataFromServer = createAsyncThunk(
  'rockets/getDataFromServer',
  async () => {
    try {
      const response = await fetch(baseUrl);
      const data = await response.json();
      return data;
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
);

const initialState = {
  rocketData: [],
  loading: false,
  error: '',
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const rocket = state.rocketData.find((rocket) => rocket.id === action.payload);
      if (rocket) {
        rocket.reserved = !rocket.reserved;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataFromServer.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDataFromServer.fulfilled, (state, action) => {
        state.loading = false;
        state.rocketData = action.payload.map((rocket) => ({
          id: rocket.id,
          image: rocket.flickr_images[0],
          name: rocket.name,
          description: rocket.description,
          reserved: false, // Initialize reserved state
        }));
      })
      .addCase(getDataFromServer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default rocketsSlice.reducer;
export const { reserveRocket } = rocketsSlice.actions;
