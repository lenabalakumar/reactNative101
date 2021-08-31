import {combineReducers, configureStore, createSlice} from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
}

export interface CounterTenState {
  tenValue: number;
}

const initialValue: CounterState = {
  value: 0,
};

const initialTenValue: CounterTenState = {
  tenValue: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialValue,
  reducers: {
    increment: state => {
      state.value = state.value + 1;
    },
    decrement: state => {
      state.value = state.value - 1;
    },
  },
});

export const counterTenSlice = createSlice({
  name: 'counterTen',
  initialState: initialTenValue,
  reducers: {
    incrementTen: state => {
      state.tenValue + 10;
    },
  },
});

const reducer = combineReducers({
  counter: counterSlice.reducer,
  counterTen: counterTenSlice.reducer,
});

export const store = configureStore({
  reducer: {counter: counterSlice.reducer, counterTen: counterTenSlice.reducer},
});

export default configureStore({reducer});

export const {increment: incrementCounter, decrement: decrementCounter} =
  counterSlice.actions;
export const {incrementTen: incrementTenCounter} = counterTenSlice.actions;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
