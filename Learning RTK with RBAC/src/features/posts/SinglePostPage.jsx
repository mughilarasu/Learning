import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";

import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "antd";

const SinglePostPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const post = useSelector((state) => selectPostById(state, Number(postId)));

  if (!post) {
    return (
      <section>
        <Button onClick={() => navigate(-1)}>Go Back</Button>
        <h2 style={{ textAlign: "center" }}>Post not found!</h2>
      </section>
    );
  }

  return (
    <section>
      <Button onClick={() => navigate(-1)}>Go Back</Button>

      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>
        <PostAuthor userId={post.userId} /> (
        <TimeAgo timestamp={post.date} />)
      </p>
      <ReactionButtons post={post} />
    </section>
  );
};

export default SinglePostPage;
