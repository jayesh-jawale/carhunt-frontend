import "./App.css";
import { useState } from "react";
import { Header } from "./layouts/header";
import { Footer } from "./layouts/footer";

import { EntryPage } from "./pages/entryPage";
import { LandingPage } from "./pages/landingPage";
import { MarutiSuzukiPage } from "./pages/marutiSuzukiPage";
import { MarutiSuzukiDetails } from "./components/maruti-suzuki/marutiSuzukiDetails";
import { HyundaiPage } from "./pages/hyundaiPage";
import { HyundaiDetails } from "./components/hyundai/hyundaiDetails";
import { SearchCar } from "./components/searchCar";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [searchCar, setSearchCar] = useState();
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <EntryPage />
          </Route>

          <main className="py-3">
            {/* <Container> */}
            <Header />

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

            <Footer />
            {/* </Container> */}
          </main>
        </Switch>
      </Router>
    </div>
  );
}

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = false;

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}
