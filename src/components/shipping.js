import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { CheckoutSteps } from "../pages/checkoutStepsPage";
import { saveShippingAddress } from "../actions/paymentRelatedActions";

export function Shipping() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { shippinngAddress } = useSelector((state) => state.cart);

  const [address, setAddress] = useState(shippinngAddress.address);
  const [city, setCity] = useState(shippinngAddress.city);
  const [postalCode, setPostalCode] = useState(shippinngAddress.postalCode);
  const [country, setCountry] = useState(shippinngAddress.country);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history.push("/payment");
  };

  return (
    <div>
      <Container>
        <CheckoutSteps step1 />
        <h1>Shipping</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter address"
              value={shippinngAddress.address}
              required
              onChange={(e) => setAddress(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter city"
              value={shippinngAddress.city}
              required
              onChange={(e) => setCity(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="postalCode">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter postal code"
              value={shippinngAddress.postalCode}
              required
              onChange={(e) => setPostalCode(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter country"
              value={shippinngAddress.country}
              required
              onChange={(e) => setCountry(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button style={{ marginTop: "10px" }} type="submit" variant="primary">
            Continue
          </Button>
        </Form>
      </Container>
    </div>
  );
}
