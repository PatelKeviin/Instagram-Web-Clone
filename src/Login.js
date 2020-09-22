import React, { useState } from "react";
import "./Login.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import { useLocation, useHistory } from "react-router-dom";
import auth, { facebookAuth } from "./config/firebaseConfig";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const currentLocation = useLocation();
  const history = useHistory();

  const facebookLogin = () => {
    auth
      .signInWithPopup(facebookAuth)
      .then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log("User token: ", token);
        console.log("User: ", user);
        history.replace("/");
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;

        console.log(errorCode, errorMessage, email, credential);
      });

    // Facebook login with redirect option:
    //   auth.signInWithRedirect(facebookAuth).then(function(user) {
    //     console.log("redirected...", user);
    //   });

    //   auth
    //     .getRedirectResult()
    //     .then(function(result) {
    //       if (result.credential) {
    //         // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    //         let token = result.credential.accessToken;
    //         console.log("Facebook access token: ", token);
    //       }
    //       // The signed-in user info.
    //       let facebookUser = result.user;
    //       console.log("Facebook user: ", facebookUser);
    //       history.replace("/");
    //     })
    //     .catch(function(error) {
    //       // Handle Errors here.
    //       let errorCode = error.code;
    //       let errorMessage = error.message;
    //       // The email of the user's account used.
    //       let email = error.email;
    //       // The firebase.auth.AuthCredential type that was used.
    //       let credential = error.credential;

    //       console.log(errorCode, errorMessage, email, credential);
    //     });
  };

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
      const { from } = currentLocation.state || { from: "/" };
      history.replace(from);

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
      .then(user => {
        //console.log(user);
        console.log(currentLocation);
        const { from } = currentLocation.state || { from: "/" };
        history.replace(from);
      })
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
        <img
          className="login__logo"
          src={require("./images/instagram-header-logo.png")}
          alt=""
        />

        <form
          className="login__form"
          // onSubmit={e => {
          //   e.preventDefault();
          //   signIn();
          // }}
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
          <button
            onClick={e => {
              e.preventDefault();
              signIn();
            }}
            type="submit"
          >
            <strong>Log In</strong>
          </button>
        </form>

        <div className="login_orContainer">
          <p className="login__or">OR</p>
        </div>

        <div className="login__facebook" onClick={() => facebookLogin()}>
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
