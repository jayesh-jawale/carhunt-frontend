import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";

export function MarutiSuzuki() {
  const { cars } = useSelector((state) => state.marutiSuzukiCar);

  return (
    <React.Fragment>
      {cars.map((car) => (
        <Card key={car._id} className="car-container">
          <Card.Img variant="top" src={car.image} />
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title>
              <Link to={`/maruti-suzuki/${car._id}`}>
                  {car.name}
              </Link>
              </Card.Title>
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
    </React.Fragment>
  );
}
