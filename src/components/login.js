import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useState } from "react";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { userLogin } from "../actions/loginAction";

export function Login() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userDetails = {
    email,
    password,
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(userLogin(userDetails));
    history.push("/landing-page");
  };

  return (
    <Container>
      <Row>
        <Col>
          <span>
            <b>User: </b>n@n.com / jayesh
          </span>
        </Col>
      </Row>
      <Row>
        <Col>
          <span>
            <b>User: </b>n@nn.com / jayesh
          </span>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 style={{ textAlign: "center" }}>CAR HUNT</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Login Form</h2>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
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
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="/registration">Register Now</a>
        </Col>
      </Row>
    </Container>
  );
}
