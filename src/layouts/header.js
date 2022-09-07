import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaShoppingCart } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { filterSearchCars } from "../actions/carActions";

export function Header() {
  const [searchTerm, setSearchTerm] = useState();

  const history = useHistory();
  const dispatch = useDispatch();



  const handleSubmit = (e) => {
    e.preventDefault();

    if (dispatch(filterSearchCars(searchTerm))) {
      history.push(`/search/${searchTerm}`);
    } else {
      history.push("/");
    }
  };

  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">CARHUNT</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Form onSubmit={handleSubmit} className="d-flex">
                <Form.Control
                  type="search"
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button type="submit" variant="outline-success">
                  Search
                </Button>
              </Form>

              <Nav.Link href="#action1">
                <FaShoppingCart />
              </Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
