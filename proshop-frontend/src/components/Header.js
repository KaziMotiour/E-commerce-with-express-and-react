import React from "react";
import { Link, NavLink } from "react-router-dom";
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
        <Link to='/'>
        <Navbar.Brand >React-Bootstrap</Navbar.Brand>
        </Link>

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
            <Link to='/cart'>
            <Nav.Link href='/cart'>
              <i className='fas fa-shopping-cart'></i>Cart
            </Nav.Link>
            </Link>
            <Link to='/login'>
            <Nav.Link href='/LogIn'>
              <i className='fas fa-user'></i>Sing In
            </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
