import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { sleep } from '../sleep'
import SpinnerComponent from '../components/SpinnerComponent'
import { Card } from 'react-bootstrap'
import { BsArrowLeftSquareFill } from 'react-icons/bs'

export default function More() {
  const { id: photoId } = useParams()
  const [photo, setPhoto] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)

    sleep(500)
      .then(() => axios.get(`https://jsonplaceholder.typicode.com/albums/1/photos/`))
      .then(({ data }) => setPhoto(data[+photoId - 1]))
  }, [])

  return (
    <>
      {!photo ? (
        <SpinnerComponent />
      ) : (
        <div className="flex-grow-1 m-3">
          <Link to="/">
            <BsArrowLeftSquareFill className="text-warning" size={40} />
          </Link>
          <div className="d-flex justify-content-center">
            <Card className="m-0 w-50">
              <Card.Img className="rounded border border-dark" src={photo.url} />
              <Card.Body className="text-center">
                <Card.Title>{photo.title}</Card.Title>
                <Card.Text>
                  <span className="m-0">id: {photo.id}</span>
                  <span className="mb-1">url: {photo.url}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      )}
    </>
  )
}
