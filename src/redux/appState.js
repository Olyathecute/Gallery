import { createSlice } from '@reduxjs/toolkit'

export const photosSlice = createSlice({
  name: 'photos',
  initialState: {
    photos: [],
    isLoading: true
  },
  reducers: {
    getPhotosFetch: state => {
      state.isLoading = true
    },
    getPhotosSuccess: (state, action) => {
      state.photos = action.payload
      state.isLoading = false
    }
  }
})
export const { getPhotosFetch, getPhotosSuccess } = photosSlice.actions

export default photosSlice.reducer
