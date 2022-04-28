import React, { useEffect, useState, useRef, createRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios'
import { Container, Image, Pagination } from 'react-bootstrap'
import { numOfGroups, numOfPhotos } from '../info'

export default function Gallery() {
  const [photos, setPhotos] = useState([])
  console.log(photos)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/albums/1/photos').then(({ data }) => {
      setPhotos(data)
    })
  }, [])

  const groups = [0, 6, 12, 18]
  const refs = useRef(
    Array(groups.length)
      .fill(0)
      .map(i => createRef())
  )

  const executeScroll = element => {
    element.scrollIntoView()
  }

  return (
    <div className="m-3">
      {groups.map((group, i) => {
        return (
          <div key={i} className="p-2">
            <Pagination className="d-flex justify-content-center" ref={refs.current[i]}>
              {groups.map((_, j) => {
                return (
                  <Pagination.Item key={j} active={i === j} onClick={() => executeScroll(refs.current[j].current)}>
                    Group {j + 1}
                  </Pagination.Item>
                )
              })}
            </Pagination>
            <Container className="text-center">
              {photos.slice(group, group + 6).map(img => {
                return (
                  <div key={img.id} className="d-inline position-relative">
                    <Image className="m-1 w-25 rounded border border-dark" src={img.url} />
                    <Link to={`/more/${img.id}`} className="position-absolute top-50 start-50 translate-middle h5 text-light text-decoration-none">
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
  )
}
