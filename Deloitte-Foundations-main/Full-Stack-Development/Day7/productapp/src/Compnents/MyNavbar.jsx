import React from 'react'
import { Navbar, Container } from 'react-bootstrap'

export default function MyNavbar(){
    return (
      <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="logo512.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          React Bootstrap
        </Navbar.Brand>
      </Container>
    </Navbar>
    )
}