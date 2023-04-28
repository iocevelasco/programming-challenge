import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { userSliceReducer } from './slices'

const rootReducer = combineReducers({
  user: userSliceReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export const storeFactory = () =>
  configureStore({
    reducer: rootReducer,
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
