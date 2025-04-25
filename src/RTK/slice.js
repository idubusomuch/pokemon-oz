import { createSlice } from '@reduxjs/toolkit';
import { fetchMultiplePokemonById } from './thunk';

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    data: [],
    loading: true,
  },
  reducers: {}, // 동기적 상태 변경
  // 비동기적 상태 변경
  extraReducers: (builder) => {
    builder
      // 받아오는 중
      .addCase(fetchMultiplePokemonById.pending, (state) => {
        state.loading = true;
      })
      // 실패할 경우
      .addCase(fetchMultiplePokemonById.rejected, (state) => {
        state.loading = false;
      })
      // 성공했을 경우
      .addCase(fetchMultiplePokemonById.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});
