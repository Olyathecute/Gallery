import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPhotosFetch } from '../redux/appState'
import { AboutText } from '../info'
import { Image } from 'react-bootstrap'
import './About.css'

export default function About() {
  const { photos } = useSelector(({ photos }) => photos)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPhotosFetch())
  }, [dispatch])

  return (
    <div className=" p-0 mx-0 flex-grow-1 align-items-center d-flex flex-column">
      <div className="row my-2 mx-0 flex-grow-1 d-flex justify-content-center align-items-center">
        <div className="col-10">
          <div className="text-center textSize">{AboutText}</div>
        </div>
      </div>

      <div className="my-2 image-row flex-grow-1 d-flex justify-content-center align-items-center">
        <div className="image-track">
          <div className="image-group">
            {photos.map((photo, index) => (
              <Image key={photo.id} src={photo.urls.small} className={`moving-image${index === photos.length - 1 ? '-last' : ''}`} />
            ))}
          </div>

          <div className="image-group" aria-hidden="true">
            {photos.map(photo => (
              <Image key={`copy-${photo.id}`} src={photo.urls.small} className="moving-image" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
