import React from "react";
import "./index.css";
import Share from "../../components/Share";
import Post from "../../components/Post";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
var posts = [];
const Feed = () => {
  const [posts, setPosts] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const post = await axios.get("/patienttimeline", {
      params: {
        username: "user1",
      },
    });
    setPosts(post);
    console.log(posts);
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.data
          ? posts.data[0].map((post) => {
              return <Post post={post} key={post.id} />;
            })
          : null}
      </div>
    </div>
  );
};

export default Feed;
