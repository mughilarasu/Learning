import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Card, Divider, Flex, Button, Tooltip } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "./postsSlice";
import { selectPostById } from "./postsSlice";
const PostsExcerpt = ({ postId, dataTestid }) => {
  const dispatch = useDispatch();
  const post = useSelector((state) => selectPostById(state, postId));
  console.log("post", post, selectPostById);
  return (
    <Card
      title={post.title}
      bordered={true}
      style={{
        width: "100%",
      }}
      data-testid={dataTestid}
      extra={
        <Flex gap="small" vertical>
          <Flex wrap="wrap" gap="small">
            <Tooltip title="Edit">
              <Link to={`/edit-post/${post.id}`}>
                <Button shape="circle" icon={<EditOutlined />} />
              </Link>
            </Tooltip>
            <Tooltip title="Delete">
              <Button
                shape="circle"
                icon={<DeleteOutlined />}
                onClick={() => {
                  dispatch(deletePost({ id: post.id })).unwrap();
                }}
              />
            </Tooltip>
          </Flex>
        </Flex>
      }
    >
      <p>{post.body.substring(0, 75)}...</p>
      <Divider />
      <PostAuthor userId={post.userId} /> (<TimeAgo timestamp={post.date} />){" "}
      <Flex wrap="wrap" gap="small">
        <ReactionButtons post={post} />
        <Link to={`/view-single-post/${post.id}`}>
          <Button style={{ margin: "8px" }} type="primary">
            View
          </Button>
        </Link>
      </Flex>
    </Card>
  );
};
export default PostsExcerpt;
