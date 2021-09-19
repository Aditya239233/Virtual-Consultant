import React from "react";
import Video from "../../assets/video.mp4";
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
      <div class="container">
        <div class="bg">
          <video
            class="video"
            autoPlay
            loop
            muted
            src={Video}
            type="video/mp4"
          />
        </div>
        <div class="body">
          <h1 class="header">Consultantions Made Easy</h1>
          <p class="paragraph">
            Sign up for a new account now for easy consultations
          </p>
          <div class="button-wrapper">
            <Button
              to="/signup"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
            >
              Get started{" "}
              {hover ? (
                <MdKeyboardArrowRight class="arrow-1" />
              ) : (
                <MdArrowForward class="arrow-1" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
