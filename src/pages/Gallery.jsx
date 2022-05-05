import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getPhotosFetch } from '../redux/appState'
import SpinnerComponent from '../components/SpinnerComponent'
import { Container, Image, Pagination } from 'react-bootstrap'
import { numOfPhotos } from '../info'

export default function Gallery() {
  const executeScroll = element => {
    element.scrollIntoView()
  }

  const { photos, isLoading } = useSelector(({ photos }) => photos)
  const dispatch = useDispatch()
  const refs = useRef([])

  useEffect(() => {
    dispatch(getPhotosFetch())
  }, [dispatch])

  const photosArray = []
  for (let i = 0; i < Math.ceil(photos.length / numOfPhotos); i++) {
    photosArray[i] = photos.slice(i * numOfPhotos, i * numOfPhotos + numOfPhotos)
  } // creating as many photo groups as we need

  return (
    <>
      {isLoading ? (
        <SpinnerComponent />
      ) : (
        <div className="m-3">
          {photosArray.map((group, i) => {
            return (
              <div key={i} className="p-2">
                <Pagination className="d-flex justify-content-center pagination-sm-sm" ref={el => (refs.current[i] = el)}>
                  {photosArray.map((_, j) => {
                    return (
                      <Pagination.Item key={j} active={i === j} onClick={() => executeScroll(refs.current[j])}>
                        Group {j + 1}
                      </Pagination.Item>
                    )
                  })}
                </Pagination>
                <Container className="text-center">
                  {group.map(img => {
                    return (
                      <div key={img.id} className="d-inline position-relative">
                        <Image className="m-1 w-25 rounded border border-dark" src={img.url} />
                        <Link
                          to={`/more/${img.id}`}
                          className="position-absolute top-50 start-50 translate-middle h5 text-light text-decoration-none"
                        >
                          More
                        </Link>
                      </div>
                    )
                  })}
                </Container>
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}
