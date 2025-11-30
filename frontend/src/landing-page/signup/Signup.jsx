import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

export default function Signup() {
  const [inputValue, setInputValue] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:3002/signup",
        inputValue,
        { withCredentials: true }
      );

      if (data.success) {
        toast.success("Signup Successful!");

        setTimeout(() => {
          window.location.href = "http://localhost:3001/dashboard";
        }, 1200);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error("Error signing up!");
    }
  };

  return (
    <div className="signup-container">
      <h2>Create Account</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Name"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button type="submit">Signup</button>
      </form>

      <ToastContainer />
    </div>
  );
}
