import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.scss";

function Signup() {
  //direct you anywhere as long as you have specified that path before
  const navigate = useNavigate();

  const URL = "http://localhost:3000/signup";


  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const zipcodeRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const firstName = firstNameRef.current ? firstNameRef.current.value : '';
    const lastName = lastNameRef.current ? lastNameRef.current.value : '';
    const username = usernameRef.current ? usernameRef.current.value : '';
    const password = passwordRef.current ? passwordRef.current.value : '';
    const zipcode = zipcodeRef.current ? zipcodeRef.current.value : '';

  const formData = {
    first_name: firstName,
    last_name: lastName,
    username: username,
    password: password,
    zipcode: zipcode,
  };

    fetch(URL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        console.log("this is data:", data);
        navigate('/');
      })
      .catch(error =>{
        console.error('invalid setup');
      });
      

  };
  

  const goBack = () =>{
    navigate('/');
  }

  return (
    <div className="signup-background">
      <svg onClick={goBack}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-chevron-left"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
        />
      </svg>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          ref={firstNameRef}
          className="signup-input"
          name="firstname"
          type="text"
          placeholder="Enter First Name Here"
        />
        <input
        ref={lastNameRef}
          className="signup-input"
          name="lastname"
          type="text"
          placeholder="Enter Last Name Here"
        />
        <input
        ref={usernameRef}
          className="signup-input"
          name="username"
          type="text"
          placeholder="Enter Username Here"
        />
        <input
        ref={passwordRef}
          className="signup-input"
          name="password"
          type="password"
          placeholder="Enter Password Here"
        />
        <input
        ref={zipcodeRef}
          className="signup-input"
          name="zipcode"
          type="text"
          placeholder="Enter Zip Code Here"
        />
        <input
          id="formButton"
          type="submit"
          value="Submit"
          class="submit-button"
        />
      </form>
    </div>
  );
}

export default Signup;
