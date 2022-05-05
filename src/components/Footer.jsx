import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { MyLinks } from '../info'

export default function Footer() {
  return (
    <footer className="flex-grow-0 bg-success text-light py-3">
      <Container>
        <Row className="d-flex justify-content-center flex-wrap">
          {MyLinks.map(({ Component, link }, index) => {
            return (
              <Col key={index} xs={5} md={2} className="text-center py-1">
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
