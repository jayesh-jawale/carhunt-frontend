import "./App.css";
import { useEffect } from "react";

import { EntryPage } from "./pages/entryPage";
import { LandingPage } from "./pages/landingPage";
import { fetchMarutiSuzukiCars } from "./actions/carActions";
import { Registration } from "./pages/registrationPage";
import { MarutiSuzukiPage } from "./pages/marutiSuzukiPage";
import { AddCartPage } from "./pages/addToCartPage";
import { Shipping } from "./components/shipping";
import { Payment } from "./components/payment";
import { MarutiSuzukiDetails } from "./components/maruti-suzuki/marutiSuzukiDetails";
import { HyundaiPage } from "./pages/hyundaiPage";
import { HyundaiDetails } from "./components/hyundai/hyundaiDetails";
import { SearchCar } from "./components/searchCar";
import { Layout } from "./layouts/layout";
import { loginSuccess } from "./slices/loginSlice";

import { useDispatch, useSelector } from "react-redux/es/exports";

import {ToastContainer} from "react-toastify"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer/>
        <Switch>
          <main className="py-3">
            {/* <Container> */}

            <Route exact path="/">
              <EntryPage />
            </Route>

            <Route exact path="/registration">
              <Registration />
            </Route>

            <ProtectedRoute exact path="/landing-page">
              <LandingPage />
            </ProtectedRoute>

            <ProtectedRoute exact path="/search/:car">
              <SearchCar />
            </ProtectedRoute>

            <ProtectedRoute exact path="/Maruti">
              <MarutiSuzukiPage />
            </ProtectedRoute>

            <ProtectedRoute exact path="/Maruti/:_id">
              <MarutiSuzukiDetails />
            </ProtectedRoute>

            <ProtectedRoute exact path="/Hyundai">
              <HyundaiPage />
            </ProtectedRoute>

            <ProtectedRoute exact path="/Hyundai/:_id">
              <HyundaiDetails />
            </ProtectedRoute>

            <ProtectedRoute exact path="/cart">
              <AddCartPage />
            </ProtectedRoute>

            <ProtectedRoute exact path="/shipping">
              <Shipping />
            </ProtectedRoute>

            <ProtectedRoute exact path="/payment">
              <Payment />
            </ProtectedRoute>

            {/* </Container> */}
          </main>
        </Switch>
      </Router>
    </div>
  );
}

const ProtectedRoute = ({ children, ...rest }) => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.login);

  useEffect(() => {
    localStorage.getItem("userInfo") && dispatch(loginSuccess()) && dispatch(fetchMarutiSuzukiCars());
  }, [dispatch]);

  return (
    <Route
      {...rest}
      render={() => {
        if (isAuth) {
          return <Layout>{children}</Layout>;
        }
      }}
    />
  );
};
