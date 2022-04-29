import React from 'react'
import { Spinner } from 'react-bootstrap'

export default function SpinnerComponent() {
  return (
    <div className="flex-grow-1 m-3 position-relative">
      <div className="position-absolute top-50 start-50 translate-middle">
        <Spinner animation="border" className="text-warning " style={{ width: '60px', height: '60px' }} />
      </div>
    </div>
  )
}
