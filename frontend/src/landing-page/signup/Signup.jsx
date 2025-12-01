import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleError = (msg) => toast.error(msg, { position: "bottom-left" });
  const handleSuccess = (msg) => toast.success(msg, { position: "bottom-right" });

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost:3002/api/auth/signup",
      inputValue
    );

    // backend must return token + message
    const { token, message, status, success } = res.data;

    // handle both backend patterns
    const ok = success || status === "success";

    if (ok && token) {
      // save token for dashboard app
      localStorage.setItem("token", token);

      toast.success(message || "Signup success!");

      setTimeout(() => {
        window.location.href = "http://localhost:3001/";
      }, 1000);
    } else {
      toast.error(message || "Signup failed");
    }
  } catch (err) {
    console.log(err);
    toast.error("Something went wrong!");
  }
};


  return (
  <div className="signupContainer mt-4 p-5">
  <div className="row">
    <h3 className="text-center mt-5 mb-4" style={{fontSize:"1.7rem",}}>Open a free demat and trading account online</h3>
    <h4 className="text-muted text-center mb-5" style={{fontSize:"1.4rem",}}>Start investing brokerage free and join a community of 1.6+ crore investors and traders</h4>
  </div>
    <div className="row align-items-center mt-5">

      {/* Left spacing */}
      <div className="col-1"></div>

      {/* Image column */}
      <div className="col-5 text-center">
        <img 
          src="/images/signuppg.png" 
          alt="Signup Illustration" 
          style={{ width: "100%", maxWidth: "450px" }}
        />
      </div>

      {/* Signup form column */}
      <div className="col-5">
        <h3 className="mb-4">Create your account</h3>

        <form onSubmit={handleSubmit} className="signupForm">

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={inputValue.email}
              onChange={handleOnChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={inputValue.username}
              onChange={handleOnChange}
              placeholder="Enter your username"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={inputValue.password}
              onChange={handleOnChange}
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Signup
          </button>

          <p className="mt-3 text-center">
            Already have an account?{" "}
            <span
              style={{ color: "#007bff", cursor: "pointer" }}
              onClick={() => window.location.href = "http://localhost:3000/login"}
            >
              Login
            </span>
          </p>

        </form>
      </div>

      {/* Right spacing */}
      <div className="col-1"></div>

    </div>

    <ToastContainer />
  </div>
);
};

export default Signup;
