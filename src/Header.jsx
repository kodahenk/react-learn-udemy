import React from "react";

export const Header = ({ courseTitle }) => {
  return (
    <div className="container">
      <nav
        className="navbar bg-dark border-bottom border-bottom-dark mb-3 py-3"
        data-bs-theme="dark"
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            {courseTitle}
          </a>
        </div>
      </nav>
    </div>
  );
};
