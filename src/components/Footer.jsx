import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { MyLinks } from '../info'

export default function Footer() {
  return (
    <footer className="flex-grow-0 bg-success text-light py-3">
      <Container>
        <Row className="justify-content-md-center py-1">
          {MyLinks.map(({ Component, link }, index) => {
            return (
              <Col key={index} xs={1} className="text-center">
                <a href={link} className="link-light" target="_blank">
                  <Component size={40} />
                </a>
              </Col>
            )
          })}
        </Row>
        <Row>
          <Col className="text-center pt-3">Made by &copy; Olyathecute</Col>
        </Row>
      </Container>
    </footer>
  )
}

// position-absolute bottom-0 start-0
