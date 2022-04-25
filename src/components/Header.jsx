import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Offcanvas, Nav, Form, FormControl, Row, Col, Image } from 'react-bootstrap'

export default function Header() {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(false)

  return (
    <header>
      <Navbar className="justify-content-md-end bg-success" expand={false}>
        <Container fluid className="justify-content-end">
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas id="offcanvasNavbar" className="bg-success" placement="start">
            <Offcanvas.Header closeButton className="justify-content-end" />
            <Offcanvas.Body className="bg-success">
              <Row>
                <Col className="text-center">
                  <Link to="/" className="text-light text-decoration-none" onClick={handleClick}>
                    Gallery
                  </Link>
                </Col>
                <Col className="text-center">
                  <Link to="/about" className="text-light text-decoration-none">
                    About
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col className="justify-content-center text-center py-2">
                  <Image roundedCircle style={{ width: '150px', paddingBottom: '12px' }} src="/photo.jpg" />

                  <div className="text-light">
                    <h5>Olya</h5>
                    <p style={{ opacity: '.5' }}>Georgia, Tbilisi</p>
                  </div>
                </Col>
              </Row>

              <Nav className="justify-content-end flex-grow-1 pe-3"></Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  )
}
