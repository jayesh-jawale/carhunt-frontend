import React from "react";
import { useSelector } from "react-redux";

import { Link, useHistory } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";

export function SearchCar() {
    const history = useHistory();
  const { searchSingleCar } = useSelector((state) => state.marutiSuzukiCar);

  return (
    <div className="car-cards">
      <Container>
        <Row>
          <Col>
            <Button style={{ marginTop: "20px" }} onClick={() => history.goBack()} variant="light">
              Go Back
            </Button>{" "}
          </Col>
        </Row>

        <Row>
          <Col>
            {searchSingleCar.map((car) => (
              <Card className="car-container" key={car._id}>
                <Card.Img variant="top" src={car.image} />
                <Card.Body style={{ textAlign: "center" }}>
                  <Link to={`/${car.company}/${car._id}`}>
                    <Card.Title>{car.name}</Card.Title>
                  </Link>
                  <Card.Text>
                    <b>Average : </b> {car.average}
                  </Card.Text>
                  <Card.Text>
                    <b>BHP : </b>
                    {car.bhp}
                  </Card.Text>
                  <Card.Text>
                    <b>Price : </b>
                    {car.price}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
