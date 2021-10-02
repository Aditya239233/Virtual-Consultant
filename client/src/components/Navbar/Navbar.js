import React from "react";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { Person, Chat, Notifications, Search } from "@material-ui/icons";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar">
      <div class="navbar-container topbarLeft">
        <LinkR to="/" class="logo">
          Virtual Consultant
        </LinkR>
        <ul class="nav-menu">
          <li class="nav-item">
            <LinkS to="/about" class="nav-links">
              About
            </LinkS>
          </li>
          <li class="nav-item">
            <LinkS to="/services" class="nav-links">
              Services
            </LinkS>
          </li>
        </ul>
        <nav class="nav-button">
          <LinkR class="nav-button-link" to="/login">
            Sign In
          </LinkR>
        </nav>
      </div>
      {/* <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for Doctors or posts"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person className="personPicture" />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Chat className="chatNotification" />
            <span className="topbarIconBadge">2</span>
          </div>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Notifications className="notification" />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img
          src="/assets/person/Daryl passport.jpg"
          alt=""
          className="topbarImg"
        />
      </div> */}
    </nav>
  );
};

export default Navbar;
