import React from "react";
import { Link, Outlet } from "react-router-dom";

function Parent() {
  return (
    <div className="container">
      <div>
        <img className="image" src="../images/annenmay.png" alt="" />
      </div>
      <div>
        <nav className="parent-nav">
          <div>
            <Link className="parent-link homelink" to="/">
              Home
            </Link>
          </div>
          <div>
            <Link className="parent-link" to="about">
              About
            </Link>
          </div>
          <div>
            <Link className="parent-link" to="album">
              Album
            </Link>
          </div>
          <div>
            <Link className="parent-link" to="youtube">
              Youtube
            </Link>
          </div>
          <div>
            <Link className="parent-link" to="contact">
              Contact
            </Link>
          </div>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Parent;
