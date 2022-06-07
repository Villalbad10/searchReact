import React from 'react'
import { Container, Form, FormControl, Navbar } from 'react-bootstrap'

const NavComponent = ({ change, submi }) => {
   return (
      <>
         <Navbar variant='dark' bg="dark" expand="lg">
            <Container fluid>
               <Navbar.Brand href="/">Star Wars</Navbar.Brand>
               <Navbar.Toggle aria-controls="navbarScroll" />
               <Navbar.Collapse id="navbarScroll">

                  <Form onSubmit={submi} className="d-flex">
                     <FormControl
                        autoComplete='off'
                        name='search'
                        onChange={change}
                        type="text"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                     />
                  </Form>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </>
   )
}

export default NavComponent