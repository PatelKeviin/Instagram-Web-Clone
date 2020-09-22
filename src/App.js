import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { useStateValue } from "./StateProvider";
import auth from "./config/firebaseConfig";

function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    // similar to componenetDidMount react hook

    // firebase listner
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch({
          type: "SET_USER",
          user: user
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <ProtectedRoute path="/">
            <>
              <Header />
              <Home />
            </>
          </ProtectedRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
