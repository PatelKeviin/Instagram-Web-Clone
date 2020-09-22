import React, { useEffect } from "react";
import { Route, useLocation, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import auth from "./config/firebaseConfig";
import { Spinner } from "react-bootstrap";

function ProtectedRoute({ children, ...rest }) {
  const currentLocation = useLocation();
  const history = useHistory();
  const [{ user }] = useStateValue();

  useEffect(() => {
    setTimeout(() => {
      console.log("User is: ", auth.currentUser);
      if (!auth.currentUser) {
        history.push({ pathname: "/login", state: { from: currentLocation } });
      }
    }, 4000);
  }, []);

  return user ? (
    <Route {...rest}>{children}</Route>
  ) : (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Spinner
        style={{ marginLeft: "auto", marginRight: "auto" }}
        animation="border"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}

export default ProtectedRoute;
