import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
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
      const { data } = await axios.post(
        "http://localhost:3002/api/auth/login",
        inputValue,
        { withCredentials: true }
      );

      const { success, message } = data;

      if (success) {
        toast.success(message);
        setTimeout(() => {
          window.location.href = "http://localhost:3001/";
        }, 1000);
      } else {
        toast.error(message);
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    }
  };

  return (
  <div className="loginContainer mt-4 p-5">
    <div className="row">
      <h3 className="text-center mt-5 mb-4" style={{fontSize:"1.7rem",}}>Open a free demat and trading account online</h3>
      <h4 className="text-muted text-center mb-5" style={{fontSize:"1.4rem",}}>Start investing brokerage free and join a community of 1.6+ crore investors and traders</h4>
    </div>
    <div className="row align-items-center">

      {/* Left spacing */}
      <div className="col-1"></div>

      {/* Image column */}
      <div className="col-5 text-center">
        <img
          src="/images/signuppg.png"
          alt="Login Illustration"
          style={{ width: "100%", maxWidth: "350px" }}
        />
      </div>

      {/* Login Form */}
      <div className="col-5">
        <h2 className="mb-4">Login to your account</h2>

        <form onSubmit={handleSubmit} className="loginForm">
          
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
            Login
          </button>

          <p className="mt-3 text-center">
            Don't have an account?{" "}
            <span
              style={{ color: "#007bff", cursor: "pointer" }}
              onClick={() =>
                (window.location.href = "http://localhost:3000/signup")
              }
            >
              Signup
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

export default Login;
