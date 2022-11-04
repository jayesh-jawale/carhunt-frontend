import { useEffect, useState } from "react";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  Alert,
  Spinner,
} from "react-bootstrap";
import { PayPalButton } from "react-paypal-button-v2";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import axios from "axios";
import {
  getFinalOrderDetails,
  orderPayDetails,
  orderListDetails,
} from "../actions/orderAction";

export function OrderScreen() {
  const [sdkReady, setSdkReady] = useState(false); //Popup

  const { isLoading, success } = useSelector((state) => state.orderPay);

  const dispatch = useDispatch();
  const { orderItems } = useSelector((state) => state.orders);

  const { finalOrderDetails } = useSelector((state) => state.finalOrders);

  useEffect(() => {
    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get(
        "http://localhost:9000/api/config/paypal"
      );
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };

    if (!orderItems || success || finalOrderDetails._id !== orderItems._id) {
      dispatch(getFinalOrderDetails(orderItems._id));
    } else if (!orderItems.isPaid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    } else {
      dispatch(orderListDetails());
    }
  }, [dispatch, orderItems, success, finalOrderDetails._id]);

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult);
    dispatch(orderPayDetails(orderItems._id, paymentResult));
  };

  return (
    <>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              {/* <p><strong>Name: </strong>{finalOrderDetails.user.name}</p>
              <p><strong>Email: </strong>{finalOrderDetails.user.email}</p> */}

              <p>
                <strong>Address: </strong>
                {orderItems.shippinngAddress.address},
                {orderItems.shippinngAddress.city},
                {orderItems.shippinngAddress.postalCode},
                {orderItems.shippinngAddress.country}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment Method</h2>
              <strong>Method: </strong>
              {orderItems.paymentMethod}
              {finalOrderDetails.isPaid ? (
                <Alert variant="success">
                  Paid on {finalOrderDetails.paidAt}
                </Alert>
              ) : (
                <Alert variant="danger">Not Paid</Alert>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
              {orderItems.orderItems.length === 0 ? (
                <h2>Your cart is empty</h2>
              ) : (
                <ListGroup variant="flush">
                  {orderItems.orderItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/${item.company}/${item._id}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.cartQuantity} x {item.price} ={" "}
                          {item.cartQuantity * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col> {orderItems.itemsPrice} Lakh</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Shipping Price</Col>
                  <Col>{orderItems.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Tax Price</Col>
                  <Col>{orderItems.taxPrice}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Total Price</Col>
                  <Col>{orderItems.finalTotalAmount} Lakh</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                {orderItems.error && (
                  <Alert variant="danger">{orderItems.error}</Alert>
                )}
              </ListGroup.Item>

              {!finalOrderDetails.isPaid && (
                <ListGroup.Item>
                  {isLoading && <Spinner />}
                  {!sdkReady ? (
                    <Spinner />
                  ) : (
                    <PayPalButton
                      amount={orderItems.finalTotalAmount}
                      onSuccess={successPaymentHandler}
                    />
                  )}
                </ListGroup.Item>
              )}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
}
