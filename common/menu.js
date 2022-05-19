import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

function menu() {
  const { data: session, status } = useSession();
  const loading = status === "loading"
  return (
    <div>
      <Navbar bg="light" expand="lg">

        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link href="/" passHref>
              <Nav.Link>Home</Nav.Link>
            </Link>
            {!loading && !session && (
              <Link href="/api/auth/signin" passHref>
                <Nav.Link onClick={e => { e.preventDefault(); signIn('github'); }}>SignIn</Nav.Link>
              </Link>)
            }
            {session && (
              <Link href="/api/auth/signOut" passHref>
                <Nav.Link onClick={e => { e.preventDefault(); signOut(); }}>SignOut</Nav.Link>
              </Link>
            )
            }

          </Nav>
        </Navbar.Collapse>

      </Navbar>
    </div>
  )
}

export default menu
