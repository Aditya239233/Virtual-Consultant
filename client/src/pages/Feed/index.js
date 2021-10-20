import React from "react";
import "./index.css";
import Share from "../../components/Share";
import Post from "../../components/Post";
import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Feed = ({ auth: { user } }) => {
  const [posts, setPosts] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    if (user.account_type === "patient") {
      const post = await axios.get("/patienttimeline", {
        params: {
          username: user.username,
        },
      });
      setPosts(post);
      // console.log(post);
    } else {
      const post = await axios.get("/doctortimeline", {
        params: {
          username: user.username,
        },
      });
      setPosts(post);
      // console.log(post);
    }
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {user.account_type === "doctor" ? <Share /> : null}
        {posts.data
          ? posts.data.map((users) => {
              console.log(users);
              if (users.length) {
                return users.map((post) => {
                  return (
                    <>
                      <div className="new"></div>
                      <Post post={post} key={post.id} />
                    </>
                  );
                });
              }
              return <Post post={users} key={users.id} />;
            })
          : "No posts to show"}
      </div>
    </div>
  );
};

Feed.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, {})(Feed);
