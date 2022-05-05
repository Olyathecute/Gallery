import { call, put, takeEvery } from 'redux-saga/effects'
import { getPhotosSuccess } from './appState'
import { sleep } from '../sleep'

function* workGetPhotosFetch() {
  yield sleep(500)
  const photos = yield call(() => fetch(`https://jsonplaceholder.typicode.com/albums/1/photos/`))
  const formattedPhotos = yield photos.json()
  const formattedPhotosShortened = formattedPhotos.slice(0, 24)
  yield put(getPhotosSuccess(formattedPhotosShortened))
}

function* photosSaga() {
  yield takeEvery('photos/getPhotosFetch', workGetPhotosFetch)
}

export default photosSaga
