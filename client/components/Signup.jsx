import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.scss";

function Signup() {
  //direct you anywhere as long as you have specified that path before
  const navigate = useNavigate();

  const URL = "http://localhost:3000/signup";

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    const firstName = formData.get("firstname");
    const lastName = formData.get("lastname");
    const username = formData.get("username");
    const password = formData.get("password");
    const zipcode = formData.get("zipcode");

    fetch(URL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: firstName,
        lastname: lastName,
        username: username,
        password: password,
        zipcode: zipcode,
      }),
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        console.log(data);
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
          className="signup-input"
          name="firstname"
          type="text"
          placeholder="Enter First Name Here"
        />
        <input
          className="signup-input"
          name="lastname"
          type="text"
          placeholder="Enter Last Name Here"
        />
        <input
          className="signup-input"
          name="username"
          type="text"
          placeholder="Enter Username Here"
        />
        <input
          className="signup-input"
          name="password"
          type="password"
          placeholder="Enter Password Here"
        />
        <input
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
