import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { sleep } from '../sleep'
import SpinnerComponent from '../components/SpinnerComponent'
import { Card } from 'react-bootstrap'
import { BsArrowLeftSquareFill } from 'react-icons/bs'
import { imageDescription } from '../info'

export default function More() {
  const { id: photoId } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const photo = useSelector(state => state.photos.photos.find(photo => photo.id === photoId))

  useEffect(() => {
    window.scrollTo(0, 0)
    sleep(500).then(() => setIsLoading(false))
  }, [])

  return (
    <>
      {isLoading ? (
        <SpinnerComponent />
      ) : (
        <div className="flex-grow-1 m-3">
          <Link to="/">
            <BsArrowLeftSquareFill className="text-warning" size={40} />
          </Link>
          <div className="d-flex justify-content-center">
            <Card className="m-0 w-50 border border-success">
              <Card.Img className="rounded" src={photo.urls.full} />
              <Card.Body className="text-center border-top border-success">
                <Card.Text>
                  <span className="m-0 text-uppercase">{photo.description ? photo.description : imageDescription}</span>
                  <br />
                  <span className="mb-1">
                    by&nbsp;
                    <em className="fw-bold">{photo.user.name}</em>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      )}
    </>
  )
}
