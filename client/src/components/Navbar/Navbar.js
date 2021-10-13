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
      <div classNameName="topbarCenter">
        <div classNameName="searchbar">
          <Search classNameName="searchIcon" />
          <input
            placeholder="Search for Doctors or posts"
            classNameName="searchInput"
          />
        </div>
      </div>
      <div classNameName="topbarRight">
        <div classNameName="topbarLinks">
          <span classNameName="topbarLink">Homepage</span>
          <span classNameName="topbarLink">Timeline</span>
        </div>
        <div classNameName="topbarIcons">
          <div classNameName="topbarIconItem">
            <Person classNameName="personPicture" />
            <span classNameName="topbarIconBadge">1</span>
          </div>
        </div>
        <div classNameName="topbarIcons">
          <div classNameName="topbarIconItem">
            <Chat classNameName="chatNotification" />
            <span classNameName="topbarIconBadge">2</span>
          </div>
        </div>
        <div classNameName="topbarIcons">
          <div classNameName="topbarIconItem">
            <Notifications classNameName="notification" />
            <span classNameName="topbarIconBadge">1</span>
          </div>
        </div>
        <img
          src="/assets/person/Daryl passport.jpg"
          alt=""
          classNameName="topbarImg"
        />
      </div>
    </>
  );
  return (
    <nav className="navbar">
      <div className="navbar-container topbarLeft">
        <LinkR to="/" className="logo">
          Virtual Consultant
        </LinkR>
        <Fragment>{isLoggedIn ? authLinks : guestLinks}</Fragment>
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
