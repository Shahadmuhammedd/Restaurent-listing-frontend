import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div><Navbar className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="" className='fs-2'>
      <i class="fa-solid fa-bell-concierge fa-bounce m-3 fs-2"></i>
        RestoCafe
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header