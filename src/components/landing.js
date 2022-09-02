import React from "react";
import {Link} from "react-router-dom";
import { Button } from "react-bootstrap";

export function Landing() {
  return (
    <React.Fragment>
      <div className="carhunt-container">
        <img
          className="slider-image"
          src="https://images.ctfassets.net/2sam6k0rncvg/5jB1yO0HQgS6z6153Kzdvw/76acb25f5bef27862270a724bdd32ecf/best-family-cars-in-india.png"
          alt="First slide"
        />

        <h3
          style={{ fontWeight: "700", marginTop: "20px", textAlign: "center" }}
        >
          Search by brand
        </h3>

        <div className="car-brands-container">
          <Link to="/maruti-suzuki">
          <div className="car-item">Maruti Suzuki</div>
          </Link>
          <Link to="/hyundai">
          <div className="car-item">Hyundai</div>
          </Link>
          <div className="car-item">Tata</div>
          <div className="car-item">Toyota</div>
          <div className="car-item">Kia</div>
          <div className="car-item">Honda</div>
        </div>
      </div>

    </React.Fragment>
  );
}
