import React from "react";
import "../App.css";

function Nav() {
  return (
    <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar">
        <div className="container-fluid" id="navCorrect">
            <h1 className="navbar-brand">Lee Templeton</h1>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="nav navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/portfolio">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/portfolio/projects">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/portfolio/#contactForm">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
  );
}

export default Nav;