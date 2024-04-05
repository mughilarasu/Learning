import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
import { Link } from "react-router-dom";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);

  const author = users.find((user) => user.key === userId);

  return (
    <span>
      by{" "}
      {author ? (
        <Link to={`/view-user/${author.id}`}>{author.label}</Link>
      ) : (
        "Unknown author"
      )}
    </span>
  );
};
export default PostAuthor;
