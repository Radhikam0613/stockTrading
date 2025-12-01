import React from "react";
import { Link } from "react-router-dom";

function navbar() {
  const closeNavbar = () => {
    const navbar = document.getElementById("navbarSupportedContent");
    const bsCollapse = new window.bootstrap.Collapse(navbar, {
      toggle: false
    });
    bsCollapse.hide();
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-white border-bottom sticky-top"
      style={{ backgroundColor: "white" }}
    >
      <div className="container-fluid px-lg-5">
        <Link className="navbar-brand col-7" to="/">
          <img src="images/logo.svg" style={{ width: "25%" }} alt="logo"></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav text-left gap-lg-2 fs-7 ">
              <li className="nav-item">
                <Link className="nav-link" to="/signup" onClick={closeNavbar}>
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={closeNavbar}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product" onClick={closeNavbar}>
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pricing" onClick={closeNavbar}>
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/support" onClick={closeNavbar}>
                  Support
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
