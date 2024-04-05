import { useSelector } from "react-redux";
import { selectAllUsers } from "./usersSlice";
import { Link } from "react-router-dom";
import { Avatar, List } from "antd";
const UsersList = () => {
  const users = useSelector(selectAllUsers);

  return (
    <section style={{ width: 360, margin: "0px auto" }}>
      <h3>Users</h3>
      <List
        bordered
        itemLayout="horizontal"
        dataSource={users}
        renderItem={(user, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                />
              }
              title={
                <Link
                  to={`/view-user/${user.id}`}
                  style={{ fontWeight: "500" }}
                >
                  {user.name}{" "}
                </Link>
              }
              //description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    </section>
  );
};

export default UsersList;
