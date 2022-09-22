import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";

import { addToCartSuccess } from "../slices/cartSlice";
import { removeFromCart } from "../slices/cartSlice";
import { getTotals } from "../slices/cartSlice";
import { clearCart } from "../slices/cartSlice";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export function AddToCart() {
  const dispatch = useDispatch();
  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);

  const handleAddToCart = (cartCars) => {
    dispatch(addToCartSuccess(cartCars));
  };

  const handleRemoveFromCart = (cartCars) => {
    dispatch(removeFromCart(cartCars));
  };

  const clearrCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart">
      <Container>
        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <h3>Your cart is currently empty</h3>
            <Link to="/landing-page">
              <p>Start Shopping</p>
            </Link>
          </div>
        ) : (
          <div>
            {cartItems.map((cartCars) => (
              <div>
                <Row>
                  <Col>
                    <Image src={cartCars.image} alt="car" fluid rounded />
                  </Col>

                  <Col>
                    <Link to={`/${cartCars.company}/${cartCars._id}`}>
                      <span>{cartCars.name}</span> <br /> <br />
                    </Link>
                    <span>
                      <b>{cartCars.price} Lakh</b>
                    </span>
                  </Col>

                  <Col>
                    <Button onClick={() => handleRemoveFromCart(cartCars)}>
                      -
                    </Button>
                    <span style={{ marginRight: "10px", marginLeft: "10px" }}>
                      {cartCars.cartQuantity}
                    </span>
                    <Button onClick={() => handleAddToCart(cartCars)}>
                      {" "}
                      +{" "}
                    </Button>
                  </Col>
                  <Col>
                    <b>
                      Total :{" "}
                      {parseFloat(
                        cartCars.price * cartCars.cartQuantity
                      ).toFixed(2)}{" "}
                      Lakh{" "}
                    </b>
                  </Col>
                </Row>
                <hr />
              </div>
            ))}
            <Row>
              <Col>
                <Button
                  className="clear-cart-button"
                  variant="light"
                  onClick={() => clearrCart()}
                >
                  {" "}
                  Clear{" "}
                </Button>
              </Col>
              <Col>
                <h4> Subtotal : {cartTotalAmount} Lakh </h4>
                <Button className="checkout-button"> Checkout </Button>
              </Col>
            </Row>
          </div>
        )}
      </Container>
    </div>
  );
}
