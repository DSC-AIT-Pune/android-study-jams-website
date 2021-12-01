import React, { useState, MenuItem, useEffect } from "react";
import { Link } from "react-router-dom";

import "../styles/css/auth.css";

import loginPage from "../styles/images/loginPage.svg";
import mail from "../styles/images/mail.svg";
import lock from "../styles/images/lock.svg";
import lock2 from "../styles/images/lock2.svg";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const Auth = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const firebaseConfig = {
    apiKey: "AIzaSyCEJxGq1DKGsb0eBuoc2jeZ2yL3NpBAg_Y",
    authDomain: "login-9cc04.firebaseapp.com",
    projectId: "login-9cc04",
    storageBucket: "login-9cc04.appspot.com",
    messagingSenderId: "410391250548",
    appId: "1:410391250548:web:0a9672719b7d84a91a3321",
  };
  const Fire = firebase.initializeApp(firebaseConfig);

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
        switch (err) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
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
        switch (err) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
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
            <h1>{hasAccount ? "Sign In" : "Sign Up"}</h1>
            <br />
            <div style={{paddingBottom: "18px"}}>
              {" "}
              Email Address : <br />
              <div className="inputContainer" style={{paddingTop: "3px"}}>
{/*                 <img src={mail} alt="" /> */}
                <input
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Enter email id "
                  required
                ></input>
              </div>
            </div>
            <div>
              {" "}
              Password : <br />
              <div className="inputContainer"  style={{paddingTop: "3px"}}>
{/*                 <img src={lock} alt="" /> */}
                <input
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Enter password  "
                  required
                ></input>
              </div>
            </div>
            <div>
              {hasAccount ? (
                <>
                  <button
                    className="loginSubmitButton"

                    // onClick={handleLogin}
                  >
                    {/* Sign In  */}
                    <img src={lock2} style={{ height: "24px" }}></img>{" "}
                  </button>
                  <div className="hr"></div>{" "}
                  <p
                    style={{
                      backgroundColor: "transparent",
                      display: "flex",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    {" "}
                    Don't have a account ?{" "}
                    <span
                      onClick={() => {
                        setHasAccount(false);
                      }}
                    >
                      {" "}
                      Sign Up
                    </span>
                  </p>
                </>
              ) : (
                <>
                  <button
                    className="loginSubmitButton"
                    // onClick={handleSignUp}
                  >
                    {/* Sign Up  */}
                    <img src={lock2} alt="" style={{ height: "24px" }} />{" "}
                  </button>{" "}
                  <div className="hr"></div>
                  <p
                    style={{
                      backgroundColor: "transparent",
                      display: "flex",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    {" "}
                    Have a account ?{" "}
                    <span
                      onClick={() => {
                        setHasAccount(true);
                      }}
                    >
                      Sign In
                    </span>
                  </p>
                </>
              )}
            </div>
            {/* <button onClick={""} className="loginSubmitButton">
               
            </button> */}
            <div style={{ color: "red", fontSize: "18px" }}>
              {passwordError}
            </div>
            <div style={{ color: "red", fontSize: "18px" }}>{emailError}</div>
            <br />
            <br />
          </form>
        </div>

        <div className="loginImage">
          <img src={loginPage} alt="planningImage" />
        </div>
      </div>
    </div>
  );
};

export default Auth;
