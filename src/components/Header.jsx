import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Navbar, Container, Offcanvas, Row, Col, Image } from 'react-bootstrap'
import { NavLinks, MyName, MyLocation, MyPhoto } from '../info'

export default function Header() {
  const [show, setShow] = useState(false)

  const handleClose = () => {
    setShow(false)
  }

  const handleOpen = () => {
    setShow(true)
  }

  return (
    <header>
      <Navbar bg="success" expand={false}>
        <Container fluid className="justify-content-end">
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleOpen} />
          <Offcanvas id="offcanvasNavbar" placement="start" className="bg-success" scroll="true" show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton className="justify-content-end" />
            <Offcanvas.Body>
              <Row>
                {NavLinks.map(({ to, link }, index) => {
                  return (
                    <Col key={index} className="text-center">
                      <Link to={to} className="link-light text-decoration-none" onClick={handleClose}>
                        {link}
                      </Link>
                    </Col>
                  )
                })}
              </Row>

              <Row>
                <Col className="justify-content-center text-center py-2">
                  <div className="mask rgba-black-strong">
                    <Image roundedCircle className="pb-3 w-50" src={MyPhoto} />
                  </div>

                  <div className="text-light">
                    <h5>{MyName}</h5>
                    <address style={{ opacity: '.5' }}>{MyLocation}</address>
                  </div>
                </Col>
              </Row>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </header>
  )
}
