import "./App.css";
import { useEffect } from "react";

import { EntryPage } from "./pages/entryPage";
import { LandingPage } from "./pages/landingPage";
import { Registration } from "./pages/registrationPage";
import { MarutiSuzukiPage } from "./pages/marutiSuzukiPage";
import { MarutiSuzukiDetails } from "./components/maruti-suzuki/marutiSuzukiDetails";
import { HyundaiPage } from "./pages/hyundaiPage";
import { HyundaiDetails } from "./components/hyundai/hyundaiDetails";
import { SearchCar } from "./components/searchCar";
import { loginSuccess } from "./slices/loginSlice";
import { Layout } from "./layouts/layout";

import { useDispatch, useSelector } from "react-redux/es/exports";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <Router>
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
    sessionStorage.getItem("token") && dispatch(loginSuccess());
  }, [dispatch]);

  return (
    <Route
      {...rest}
      render={() =>
        isAuth ? <Layout>{children}</Layout> : <Redirect to="/" />
      }
    />
  );
};
