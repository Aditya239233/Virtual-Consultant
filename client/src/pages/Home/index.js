import React from "react";
import { useState } from "react";
import "./index.css";
import { Button } from "../../components/StyledComponents/ButtonElement";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

const Home = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <div className="container">
        <div className="bg">
          <video
            className="video"
            autoPlay
            loop
            muted
            src="/assets/video.mp4"
            type="video/mp4"
          />
        </div>
        <div className="body">
          <h1 className="header">Consultations Made Easy</h1>
          <p className="paragraph">
            Sign up for a new account now for easy consultations
          </p>
          <div className="button-wrapper">
            <Button
              to="/signup"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
            >
              Get started{" "}
              {hover ? (
                <MdKeyboardArrowRight className="arrow-1" />
              ) : (
                <MdArrowForward className="arrow-1" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
