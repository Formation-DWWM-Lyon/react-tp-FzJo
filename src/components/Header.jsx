import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import { lobster } from "../img/index";



const Header = () => (
  <header>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home" className="title">
        Dev'Lobster
        <Image className="lobster-logo" src={lobster} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Navbar.Text>
            <Link to="/">Settings</Link>
          </Navbar.Text>
          <Navbar.Text>
            <Link to="/">Messages</Link>
          </Navbar.Text>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  </header>
);

export default Header;
