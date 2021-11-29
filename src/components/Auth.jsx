import React, { useState, MenuItem, useEffect } from "react";
import { Link } from "react-router-dom";

import "../styles/css/auth.css";

import loginPage from "../styles/images/loginPage.svg";
import mail from "../styles/images/mail.svg";
import lock from "../styles/images/lock.svg";
import Fire from "./Fire";

const Auth = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };
  const handleLogin = () => { 
    clearErrors();
    Fire.auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setPasswordError(err.message);
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };
  const handleSignUp = () => {
    clearErrors();
    Fire.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };
  const handleLogout = () => {
    Fire.auth().signOut();
  };
  const authListener = () => {
    Fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };
  useEffect(() => {
    authListener();
  }, []);

  return (
    <div className="editor">
      <div className="loginContainer">
        <div className="sigin_card">
          <form>
            <h1>Log In </h1>
            <br />
            <div>
              {" "}
              Email Address : <br />
              <div className="inputContainer">
                <img src={mail} alt="" />
                <input
                  type="text"
                  name="email"
                  onChange={" "}
                  value={"email"}
                  placeholder="Enter email id "
                ></input>
              </div>
            </div>
            <div>
              {" "}
              Password : <br />
              <div className="inputContainer">
                <img src={lock} alt="" />
                <input
                  type="text"
                  name="password"
                  onChange={" "}
                  value={"password"}
                  placeholder="Enter password  "
                ></input>
              </div>
            </div>
            <button onClick={" "} className="loginSubmitButton">
              Submit
            </button>
            <div style={{ color: "red", fontSize: "18px" }}>{}</div>
            <br />
            <br />
            <div className="hr"></div>
          </form>

          <Link
            to="/signIn"
            style={{
              backgroundColor: "transparent",
              display: "flex",
              justifyContent: "center",
              color: "white",
            }}
          >
            Don't have a account ? Want to make One !
          </Link>
        </div>

        <div className="loginImage">
          <img src={loginPage} alt="planningImage" />
        </div>
      </div>
    </div>
  );
};

export default Auth;
