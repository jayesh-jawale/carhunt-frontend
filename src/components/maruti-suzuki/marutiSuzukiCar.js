import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { MarutiSuzuki } from "./marutiSuzuki";
import { fetchMarutiSuzukiCars } from "../../actions/carActions";

export function MarutiSuzukiCar() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMarutiSuzukiCars());
  }, [dispatch]);

  return (
    <div className="car-cards">
      <MarutiSuzuki />
    </div>
  );
}


