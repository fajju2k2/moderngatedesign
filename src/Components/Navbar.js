import React from 'react';

const Navbar = () => {
  return (
    <header id="header">
      <div className="container-fluid">
        <div id="logo" className="pull-left">
          <h1>
            <a href="#intro" className="scrollto">
              <img src="img/gracious-logo.png" alt="logo" id="gglogo" />
            </a>
          </h1>
          <a href="#intro">
            <img src="img/logo.png" alt="" title="" />
          </a>
        </div>

        <nav id="nav-menu-container">
          <ul className="nav-menu">
            <li className="menu-active">
              <a href="#intro">Home</a>
            </li>
            <li>
              <a href="aboutus.html">About Us</a>
            </li>
            <li>
              <a href="gallery.html">Gallery</a>
            </li>

            <li>
              <a href="contactUs.html">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
