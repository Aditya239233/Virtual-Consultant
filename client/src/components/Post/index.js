import "./index.css";
import axios from "axios";
import { useState } from "react";
import { Delete } from "@material-ui/icons";

async function d(p) {
  console.log("hello", p);
  const k = await axios.delete("http://localhost:8000/deletepost", {
    params: { id: p },
  });
  console.log(k);
  alert("Post has been deleted");
  window.location.reload(true);
}
const Post = (post) => {
  const handleLike = () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const data = {
      id: post["post"].id,
      username: "asd",
    };
    axios.put("/likepost", data, config);
  };
  const [liked, setLiked] = useState(true);
  return (
    <div className="post">
      {console.log(post)}
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="/assets/Picture1.jpg" alt="" />
            <span className="postUsername">{post["post"].username}</span>
            <span className="postDate"> 5 mins ago</span>
          </div>
          <div className="postTopRight">
            <Delete onClick={() => d(post["post"]["id"])} />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post["post"].desc}</span>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="heartIcon"
              src="assets/heart.png"
              alt=""
              onClick={handleLike}
            />
            <span className="postLikeCounter">
              {post["post"].likes ? post["post"].likes.length : 0} people like
              it{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
