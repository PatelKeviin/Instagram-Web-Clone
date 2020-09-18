import React, { useState } from "react";
import "./Login.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Link } from "react-router-dom";
import auth from "./config/firebaseConfig";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // handling sign-up process using firebase service
  const verifyEmail = async () => {
    try {
      // get current user
      const user = auth.currentUser;
      console.log(user);

      user
        .sendEmailVerification()
        .then(() => {
          // do something after email sent
        })
        .catch(err => {
          alert(err.message);
        });
    } catch (err) {
      const errorCode = err.code;
      const errorMessage = err.message;

      console.log(errorCode, ": ", errorMessage);
      alert(errorMessage);
    }
  };

  const signUp = async () => {
    if (email === "" || password === "") {
      alert("Either email or password field, or both, is/are empty!");
      return;
    }

    try {
      const user = await auth.createUserWithEmailAndPassword(email, password);
      console.log(user, auth.currentUser);

      verifyEmail();
    } catch (err) {
      const errorCode = err.code;
      const errorMessage = err.message;

      console.log(errorCode, ": ", errorMessage);
      alert(errorMessage);
    }
  };

  const signIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(user => console.log(user))
      .catch(function(err) {
        // Handling Errors here.
        const errorCode = err.code;
        const errorMessage = err.message;

        console.log(errorCode, ": ", errorMessage);
        alert(errorMessage);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <Link to="/">
          <img
            className="login__logo"
            src={require("./images/instagram-header-logo.png")}
            alt=""
          />
        </Link>

        <form
          className="login__form"
          onSubmit={e => {
            e.preventDefault();
            signIn();
          }}
        >
          <input
            type="text"
            placeholder="Phone number, email, or email"
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">
            <strong>Log In</strong>
          </button>
        </form>

        <div className="login_orContainer">
          <p className="login__or">OR</p>
        </div>

        <div className="login__facebook">
          <FacebookIcon style={{ fill: "#385185" }} />
          <p style={{ margin: "0px", fontSize: "14px", color: "#385185" }}>
            <strong>Log in with Facebook</strong>
          </p>
        </div>

        <p className="login__forgotPassword">Forgot password?</p>
      </div>

      <div className="login__signUp">
        <p className="login__signUpText" style={{ margin: "0px" }}>
          Don't have an account?
        </p>
        <p onClick={signUp} className="login__signUpButton">
          Sign up
        </p>
      </div>
    </div>
  );
}

export default Login;
