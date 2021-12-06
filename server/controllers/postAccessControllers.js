const doctor = require("../model/doctor");
const patient = require("../model/patient");
const Post = require("../model/post");

const createPost = async (request, response) => {
  //console.log(request.body);
  const newPost = new Post(request.body);
  try {
    const savedPost = await newPost.save();
    response.status(200).json(savedPost);
  } catch (err) {
    response.status(500).json(err);
  }
};

const updatePost = async (request, response) => {
  try {
    const post = await Post.findOne({
      id: request.body.id,
    });
    if (post) {
      await post.updateOne({
        $set: request.body,
      });
      response.status(200).json("The post has been updated");
    } else {
      response.status(403).json("You can update only your post");
    }
  } catch (err) {
    response.status(500).json(err);
  }
};

const deletePost = async (request, response) => {
  console.log("post body", request.query["id"]);
  try {
    const post = await Post.findOne({
      id: request.query["id"],
    });
    console.log(post.id);
    if (post) {
      await post.deleteOne();
      response.status(200).json("The post has been deleted");
    } else {
      response.status(403).json("You can delete only your post");
    }
  } catch (err) {
    response.status(500).json(err);
  }
};

const likePost = async (request, response) => {
  console.log(request.body);
  try {
    const post = await Post.findOne({
      id: request.body.id,
    });
    if (!post.likes.includes(request.body.username)) {
      await post.updateOne({
        $push: {
          likes: request.body.username,
        },
      });
      response.status(200).json("The post has been liked");
    } else {
      await post.updateOne({
        $pull: {
          likes: request.body.username,
        },
      });
      response.status(200).json("The post has been disliked");
    }
  } catch (err) {
    response.status(500).json(err);
  }
};

const timelinePostPatient = async (request, response) => {
  try {
    const currentPatient = await patient.findOne({
      username: request.query.username,
    });
    console.log(currentPatient.following);
    const doctorPosts = await Promise.all(
      currentPatient.following.map((DoctorUsername) => {
        return Post.find({
          username: DoctorUsername,
        });
      })
    );
    response.json(doctorPosts);
  } catch (err) {
    response.status(500).json(err);
  }
};

const timelinePostDoctor = async (request, response) => {
  try {
    const currentDoctor = await doctor.findOne({
      username: request.query.username,
    });
    const doctorPosts = await Post.find({
      username: currentDoctor.username,
    });
    response.json(doctorPosts);
  } catch (err) {
    response.status(500).json(err);
  }
};
module.exports = {
  createPost,
  updatePost,
  deletePost,
  likePost,
  timelinePostPatient,
  timelinePostDoctor,
};
