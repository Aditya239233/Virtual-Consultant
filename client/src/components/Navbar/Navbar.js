import React, { Fragment } from "react";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Person, Chat, Notifications, Search } from "@material-ui/icons";
import "./navbar.css";

const Navbar = ({ auth: { isLoggedIn } }) => {
  const guestLinks = (
    <>
      <ul className="nav-menu">
        <li className="nav-item">
          <LinkS to="/about" className="nav-links">
            About
          </LinkS>
        </li>
        <li className="nav-item">
          <LinkS to="/services" className="nav-links">
            Services
          </LinkS>
        </li>
      </ul>
      <nav className="nav-button">
        <LinkR className="nav-button-link" to="/login">
          Sign In
        </LinkR>
      </nav>
    </>
  );

  const authLinks = (
    <>
      <div
        className="topbarCenter"
        style={{
          paddingTop: "20px",
          paddingLeft: "20px",
        }}
      >
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
          <span className="topbarLink"></span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person className="personPicture" />
          </div>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Chat className="chatNotification" />
          </div>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Notifications className="notification" />
          </div>
        </div>
      </div>
    </>
  );
  return (
    <nav className="navbar">
      <div className="navbar-container topbarLeft">
        <LinkR to="/" className="logo">
          Virtual Consultant
        </LinkR>
        {isLoggedIn ? authLinks : guestLinks}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(Navbar);
