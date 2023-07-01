import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  //direct you anywhere as long as you have specified that path before
  const navigate = useNavigate();

  const URL = '/api/signup';

  const handleSubmit = (e) => {

    const formData = new FormData();

    const firstName = formData.get('firstname');
    const lastName = formData.get('lastname');
    const username = formData.get('username');
    const password = formData.get('password');
    const zipcode = formData.get('zipcode');


    fetch(URL, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            firstname: firstName,
            lastname: lastName,
            username: username,
            password: password,
            zipcode: zipcode
        })
      })
      .then((res)=>{
        res.json();
      })
      .then((data)=>{
        console.log(data);
      })
  };


 

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="firstname"
          type="text"
          placeholder="Enter First Name Here"
        />
        <input
          name="lastname"
          type="text"
          placeholder="Enter Last Name Here"
        />
        <input
          name="username"
          type="text"
          placeholder="Enter Username Here"
        />
        <input
          name="password"
          type="text"
          placeholder="Enter Password Here"
        />
        <input
          name="zipcode"
          type="text"
          placeholder="Enter Zip Code Here"
        />
        <input id="formButton" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Signup;
