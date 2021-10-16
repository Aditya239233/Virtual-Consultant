import "./index.css";
import { MoreVert } from "@material-ui/icons";
import axios from "axios"

async function d(p) {
  console.log("hello",p)
  const k = await axios.delete("http://localhost:8000/deletepost", { params: { id: p } });
  console.log(k)
}
const Post = (post) => {
  return (
    <div className="post">
      {console.log(post['post']['id'])}
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="/assets/Picture1.jpg" alt="" />
            <span className="postUsername">{post.username}</span>
            <span className="postDate"> 5 mins ago</span>
          </div>
          <div className="postTopRight">
            <button onClick={() => d(post['post']['id'])}>Delete</button>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img className="postImg" src="assets/Post/Passport.jpg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="heartIcon" src="assets/heart.png" alt="" />
            <span className="postLikeCounter">
              {post.likes ? post.likes.length : 0} people like it
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
