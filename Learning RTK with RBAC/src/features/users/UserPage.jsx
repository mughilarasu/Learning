import { useSelector } from "react-redux";
import { selectUserById } from "../users/usersSlice";
import { selectAllPosts, selectPostsByUser } from "../posts/postsSlice";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button } from "antd";
import { Avatar, List } from "antd";

const UserPage = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const user = useSelector((state) => selectUserById(state, Number(userId)));

  const postsForUser = useSelector((state) =>
    selectPostsByUser(state, Number(userId))
  );

  return (
    <>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
      <section style={{ width: 800, margin: "0px auto" }}>
        <h3>
          {" "}
          <Avatar
            src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${userId - 1}`}
          />
          {user?.name}
        </h3>

        <List
          bordered
          itemLayout="horizontal"
          dataSource={postsForUser}
          renderItem={(post, index) => (
            <List.Item>
              <List.Item.Meta
                title={
                  <Link
                    to={`/view-single-post/${post.id}`}
                    style={{ fontWeight: "500" }}
                  >
                    {post.title}{" "}
                  </Link>
                }
                //description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </List.Item>
          )}
        />
      </section>
    </>
  );
};

export default UserPage;
