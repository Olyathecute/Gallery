import { configureStore } from '@reduxjs/toolkit'
import photosSlice from './appState'
import appSaga from './appSaga'
import createSagaMiddleware from '@redux-saga/core'

const saga = createSagaMiddleware()

const store = configureStore({
  reducer: { photos: photosSlice },
  middleware: [saga]
})
saga.run(appSaga)
export default store
