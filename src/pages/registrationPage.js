import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { userRegistration } from "../actions/userRegistrationAction.js";

import { Container, Row, Col, Alert } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export function Registration() {
  const dispatch = useDispatch();
  const {message} = useSelector((state) => state.userRegistration);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const registrationData = {
        name,
        email,
        password,
      };

      dispatch(userRegistration(registrationData))
  }

  return (
    <div className="registration">
      <Container>
        <Row>
          <Col>
            <h2>Registration Form</h2>
          </Col>
        </Row>
        <hr />

        <Row>
            <Col>
              {message && <Alert>{message}</Alert>}
            </Col>
            </Row>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Register
              </Button>
              <Row>
                <Col>Already have an account!</Col>
              </Row>
              <Row>
                <Col>
                  <a href="/">Login Now</a>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
