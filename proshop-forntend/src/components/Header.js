import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar
        bg='dark'
        variant='dark'
        expand='lg'
        collapseOnSelect
        className='px-5'
      >
        <LinkContainer to='/'>
        <Navbar.Brand >React-Bootstrap</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Form className='d-flex'>
            <FormControl
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
            />
            <Button variant='outline-success'>Search</Button>
          </Form>
          <Nav style={{ marginLeft: "auto" }}>
            <LinkContainer to='/cart'>
            <Nav.Link >
              <i className='fas fa-shopping-cart'></i>Cart
            </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/login'>
            <Nav.Link href='/LogIn'>
              <i className='fas fa-user'></i>Sing In
            </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
