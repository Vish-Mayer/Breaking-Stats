import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-dark bg-dark">
        <div>
          <p>
            <span className="B br">Br</span>eaking
            <span className="B">S</span>tats
          </p>
        </div>
      </nav>
    </div>
  );
};

export { Navbar };
