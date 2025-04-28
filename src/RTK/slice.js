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

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: [1, 2, 3],
  reducers: {
    // redux에는 immer라는 패키지(불변 객체를 관리하는 기능)를 내장하고 있어서 아래와 같이 참조 자료형을 건드려도 관리해줌
    addToFavorite(state, action) {
      state.push(action.payload.pokemonId);
    },
    removeFromFavorite(state, action) {
      const index = state.indexOf(action.payload.pokemonId);
      if (index !== -1) state.splice(index, 1);
    },
  },
});
