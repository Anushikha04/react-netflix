import React, { useRef, useState } from "react";
import Header from "./Header";
import { NETFLIX_LOGIN_BACKGROUND_IMAGE } from "../utils/const";
import { validateFormData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInMode, setIsSignInMode] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const goToSignUp = () => {
    setIsSignInMode(false);
  };
  const goToSignIn = () => {
    setIsSignInMode(true);
  };

  const handleSubmit = () => {
    const message = validateFormData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (errorMessage) return;

    //sign in/sign up
    if (!isSignInMode) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={NETFLIX_LOGIN_BACKGROUND_IMAGE}
          alt="netflix background logo"
        />
      </div>

      <div className="text-white rounded-lg absolute bg-black bg-opacity-80 w-4/12 p-12 my-36 mx-auto right-0 left-0">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1 className="text-2xl font-bold">
            {isSignInMode ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInMode && (
            <input
              type="text"
              placeholder="Full name"
              className="w-full bg-gray-600 rounded-lg p-4 m-4"
              ref={name}
            />
          )}
          <input
            type="text"
            placeholder="Email or mobile number"
            className="w-full bg-gray-600 rounded-lg p-4 m-4"
            ref={email}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-gray-600 rounded-lg  p-4 m-4"
            ref={password}
          />
          {errorMessage && (
            <p className="font-bold text-red-700 text-lg">{errorMessage}</p>
          )}
          <button
            className="font-bold bg-red-700 rounded-lg p-4 m-4 w-full"
            onClick={handleSubmit}
          >
            {isSignInMode ? "Sign In" : "Sign Up"}
          </button>
          {isSignInMode && (
            <p className="text-gray-500">
              New to Netflix?
              <span
                className="font-bold cursor-pointer text-white"
                onClick={goToSignUp}
              >
                Sign up now.
              </span>
            </p>
          )}
          {!isSignInMode && (
            <p className="text-gray-500">
              Already Registered?
              <span
                className="font-bold cursor-pointer text-white"
                onClick={goToSignIn}
              >
                Sign in now.
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
