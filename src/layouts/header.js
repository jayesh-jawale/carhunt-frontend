import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaShoppingCart } from "react-icons/fa";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { filterSearchCars } from "../actions/carActions";

export function Header() {
  const [searchTerm, setSearchTerm] = useState();

  const history = useHistory();
  const dispatch = useDispatch();
  const {users} = useSelector((state) => state.login)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (dispatch(filterSearchCars(searchTerm))) {
      history.push(`/search/${searchTerm}`);
    } else {
      history.push("/");
    }
  };

  const logMeOut = () => {
    sessionStorage.clear();
    history.push("/");
  };

  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Link to="/landing-page">
          <Navbar.Brand>CARHUNT</Navbar.Brand>
          </Link>
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

              <Nav.Link>
                <FaShoppingCart />
              </Nav.Link>
              <NavDropdown title={users.data.name} id="navbarScrollingDropdown">
                <NavDropdown.Item>Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={() => logMeOut()}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
