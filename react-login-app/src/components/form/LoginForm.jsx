import { useState } from "react";
import { Navbar } from "../navbar/Navbar";
import "./login.css";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChanges = (e) => {
    const { name, value } = e.target;

    setLoginCredentials({
      ...loginCredentials,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = JSON.parse(localStorage.getItem("userCredentials"))||[];

    if (userData.length>0) {
      let userFound = userData.find(
        (user) =>
          user.email === loginCredentials.email &&
          user.password === loginCredentials.password
      );
      console.log(userFound);
      if (userFound) {
        navigate('/')
      }
      else{
        alert("User not found, please sign in")
      }

    }

   
  };

  return (
    <>
      <Navbar />
      <form id="login-form" onSubmit={handleSubmit}>
        <label>
          Email Id
          <input
            placeholder="Enter email..."
            name="email"
            value={loginCredentials.email}
            onChange={handleChanges}
          />
        </label>
        <br />
        <br />
        <label>
          Password
          <input
            placeholder="Enter password"
            name="password"
            value={loginCredentials.password}
            onChange={handleChanges}
          />
        </label>
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
};
