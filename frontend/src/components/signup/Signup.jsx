import React from "react";
import "./signup.css";
import HeadingComp from "./HeadingComp";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const history = useNavigate();
  const [Inputs, setInputs] = useState({
    email: "",
    username: "",
    password: "",
  });
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };
  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post(`${window.location.origin}/api/v1/register`, Inputs)
      .then((response) => {
        if (response.data.message === "User Already Exists") {
          alert(response.data.message);
        } else {
          alert(response.data.message);
          setInputs({
            email: "",
            username: "",
            password: "",
          });
          history("/signin");
        }
      });
  };
  return (
    <div className="signup">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 column d-flex justify-content-center align-items-center ">
            <div className="d-flex flex-column  w-100 p-3">
              <input
                className="p-2  my-3 input-signup"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                onChange={change}
                value={Inputs.email}
              />
              <input
                className="p-2 my-3 input-signup"
                type="username"
                name="username"
                placeholder="Enter Your Username"
                onChange={change}
                value={Inputs.username}
              />
              <input
                className="p-2 my-3 input-signup"
                type="password"
                name="password"
                placeholder="Enter Your Password"
                onChange={change}
                value={Inputs.password}
              />

              <button className="btn-signup p-2" onClick={submit}>
                Sign Up
              </button>
            </div>
          </div>
          <div className=" col-lg-4 column col-left d-lg-flex justify-content-center align-items-center  d-none">
            <HeadingComp first="Sign" second="Up" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
