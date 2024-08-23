import { useState } from "react";
import { Navbar } from "../navbar/Navbar";
import "./signup.css";
import { useNavigate } from "react-router-dom";

export const SignupForm = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
  });

  const navigate = useNavigate();

  const handleChanges = (e) => {
    const { name, value } = e.target;

    if (name === "firstName" || name === "lastName") {
      if (!/^[a-zA-Z ]+$/.test(value) &&value!=="") {
        return;
      }
    }

    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };
  console.log(userDetails);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(userDetails.email)
    ) {
      alert("Please enter a valid email ");
      return;
    }

    // if (!userDetails) {
    //   alert("Please enter a value");
    //   return;
    // }

    
    //Check email uniqueness and then add to localstorage. 
    
    // localstorage
    let existingUsers = JSON.parse(localStorage.getItem("userCredentials")) || [];
    let updUser = [...existingUsers, userDetails];
    console.log(updUser);

    localStorage.setItem("userCredentials", JSON.stringify(updUser));

    navigate("/login");

  };

  return (
    <>
      <Navbar />
      <form id="sign-up" onSubmit={handleSubmit}>
        <label>
          First Name
          <input
            placeholder="Enter FirstName..."
            name="firstName"
            onChange={handleChanges}
            value={userDetails.firstName}
          />
        </label>
        <br />
        <br />
        <label>
          Last Name
          <input
            placeholder="Enter LastName..."
            name="lastName"
            onChange={handleChanges}
            value={userDetails.lastName}
          />
        </label>
        <br />
        <br />
        <label>
          Email Id
          <input
            placeholder="Enter emailid..."
            name="email"
            onChange={handleChanges}
            value={userDetails.email}
          />
        </label>
        <br />
        <br />
        <label>
          Password
          <input
            placeholder="Enter password..."
            name="password"
            onChange={handleChanges}
            value={userDetails.password}
          />
        </label>
        <br />
        <br />
        <label>
          Address
          <input
            placeholder="Enter address..."
            name="address"
            onChange={handleChanges}
            value={userDetails.address}
          />
        </label>
        <br />
        <button type="submit" id="sign-up-btn">
          Sign Up
        </button>
      </form>
    </>
  );
};
