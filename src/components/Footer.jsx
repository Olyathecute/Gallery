import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { LINKS } from '../info'

export default function Footer() {
  return (
    <footer className="bg-success text-light py-3">
      <Container>
        <Row className="justify-content-md-center py-1">
          {LINKS.map(({ icon, link }, index) => {
            return (
              <Col key={index} xs={1} className="text-center">
                <a href={link} target="_blank">
                  {icon}
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
