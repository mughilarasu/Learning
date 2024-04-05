import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";
import { Button, Flex } from "antd";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <Button
        // shape="circle"
        type="dashed"
        key={name}
        style={{ marginTop: 8, marginBottom: 8, marginRight: 8 }}
        className="reactionButton"
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </Button>
    );
  });

  return <div>{reactionButtons}</div>;
};
export default ReactionButtons;
