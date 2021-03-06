import React, { Fragment } from "react";
import { Link as LinkR } from "react-router-dom";
import PropTypes from "prop-types";
import { connect, useDispatch } from "react-redux";
import {
  Person,
  Chat,
  Notifications,
  Search,
  LocalHospital,
} from "@material-ui/icons";
import { logout } from "../../redux/actions/auth";
import "./navbar.css";

const Navbar = ({ auth: { isLoggedIn, user } }) => {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(logout());
  };
  const guestLinks = (
    <>
      <LinkR to="/" className="logo">
        Virtual Consultant
      </LinkR>
      <nav className="nav-button">
        <LinkR className="nav-button-link" to="/login">
          Sign In
        </LinkR>
      </nav>
    </>
  );

  const authLinks = (
    <>
      <LinkR to="/feed" className="logo">
        Virtual Consultant
      </LinkR>
      <div
        className="topbarCenter"
        style={{
          paddingTop: "25px",
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
        {user.account_type === "patient" ? (
          <a
            href="http://localhost:3000/consult"
            style={{ textDecoration: "none" }}
            className="links"
          >
            <LocalHospital />
          </a>
        ) : null}
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <a
              href="http://localhost:3000/messenger"
              style={{ textDecoration: "none" }}
              className="links"
            >
              <Chat className="chatNotification"></Chat>
            </a>
          </div>
        </div>
        {user.account_type === "doctor" ? (
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <a href="http://localhost:3000/notifications" className="links">
                <Notifications className="notification"></Notifications>
              </a>
            </div>
          </div>
        ) : null}

        <div className="topbarIcons">
          <div className="topbarIconItem">
            {user && user.account_type === "doctor" ? (
              <a href="/doctorprofile" className="links">
                <Person className="personPicture" />
              </a>
            ) : (
              <a href="/patientprofile" className="links">
                <Person className="personPicture" />
              </a>
            )}
          </div>
        </div>
        <nav className="nav-button">
          <button
            onClick={handleSubmit}
            width={10}
            height={10}
            className="nav-button-link"
          >
            {" "}
            <a href="http://localhost:3000/" className="nav-button-link">
              Logout
            </a>
          </button>
          {/* <LinkR className="nav-button-link" onSubmit={handleSubmit} to="/"> */}
          {/* </LinkR> */}
        </nav>
      </div>
    </>
  );
  return (
    <nav className="navbar">
      <div className="navbar-container topbarLeft">
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
