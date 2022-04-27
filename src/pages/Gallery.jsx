import React, { useEffect, useState, useRef, createRef } from 'react'
import axios from 'axios'
import { Image, Pagination } from 'react-bootstrap'
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
            <div className="d-flex justify-content-center flex-wrap">
              {photos.slice(group, group + 6).map(img => {
                return <Image key={img.id} className="m-1 w-25 rounded border border-dark" src={img.url} />
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
