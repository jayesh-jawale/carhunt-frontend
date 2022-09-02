import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import  {useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { fetchSingleMarutiSuzukiCar } from "../../actions/carActions";

export function HyundaiDetails() {
  const { fetchSingleCar } = useSelector((state) => state.marutiSuzukiCar);
  const { _id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchSingleMarutiSuzukiCar(_id));
  }, [_id, dispatch]);

  return (
    <Container>
      <Row>
        <Col>
          <Button style={{ marginTop: "20px" }} onClick={() => history.push("/hyundai")} variant="light">
            Go Back
          </Button>{" "}
        </Col>
      </Row>
      <Row>
        <Col>
          <img className="car-image" src={fetchSingleCar.image2} alt="car" />
        </Col>
      </Row>
      <Row>
        <Col>
          <b>Description :</b> {fetchSingleCar.description}
        </Col>
      </Row>
      <Row>
        <Col className="car-cart">
          <div style={{ marginTop: "20px" }}>
            <b>Price: </b> {fetchSingleCar.price}
          </div>
          <Button style={{ marginTop: "20px" }} variant="primary">
            ADD TO CART
          </Button>{" "}
        </Col>
      </Row>
    </Container>
  );
}
