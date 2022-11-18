import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { fetchMarutiSuzukiCars } from "../../actions/carActions";

import Card from "react-bootstrap/Card";

export function Hyundai() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMarutiSuzukiCars());
  }, [dispatch]);
  const { cars } = useSelector((state) => state.marutiSuzukiCar);

  return (
    <React.Fragment>
      <div className="car-cards">
        {cars
          // eslint-disable-next-line array-callback-return
          .filter((car) => {
            if (car.company === "Hyundai") {
              return car;
            }
          })
          .map((car) => (
            <Card key={car._id} className="car-container">
              <Card.Img variant="top" src={car.image} />
              <Card.Body style={{ textAlign: "center" }}>
                <Card.Title>
                  <Link to={`/Hyundai/${car._id}`}>{car.name}</Link>
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
      </div>
    </React.Fragment>
  );
}
