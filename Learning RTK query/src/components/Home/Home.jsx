import React, { useEffect, useState } from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Counter from "../../features/counter/Counter";
import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import PostsList from "../../features/posts/PostsList";
import { useLocation, useNavigate } from "react-router-dom";
import AddPostForm from "../../features/posts/AddPostForm";
import SinglePostPage from "../../features/posts/SinglePostPage";
import EditPostForm from "../../features/posts/EditPostForm";
import UsersList from "../../features/users/UsersList";
import { useDispatch, useSelector } from "react-redux";
// import { getCount, increaseCount } from "../../features/posts/postsSlice";
import UserPage from "../../features/users/UserPage";
import TodoList from "../../features/todo/TodoList";
const { Header, Content, Footer, Sider } = Layout;
const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const items2 = ["Counter", "Posts", "User", "Todo"].map((value) => {
  return {
    key: value.toLowerCase(),
    // icon: React.createElement(icon),
    label: value,
    children:
      value === "Posts"
        ? [
            {
              key: "view-posts",
              label: "View Posts",
            },
            {
              key: "add-post",
              label: "Add Post",
            },
          ]
        : null,
  };
});
const Home = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  const location = useLocation();
  //   const count = useSelector(getCount);
  const dispatch = useDispatch();

  const currentLocation = location.pathname.toLowerCase().replace("/", "");
  const urlFormatted =
    currentLocation.split("/").length > 0
      ? currentLocation.split("/")[0]
      : "counter";
  const [currentApp, setCurrentApp] = useState(urlFormatted || "counter");

  useEffect(() => {
    setCurrentApp(urlFormatted || "counter");
  }, [urlFormatted]);
  console.log("currentApp", currentApp);

  return (
    <Content
      style={{
        padding: "24px",
        minHeight: "100vh",
      }}
    >
      <Breadcrumb
        style={{
          margin: "16px 0",
        }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>{currentApp}</Breadcrumb.Item>
      </Breadcrumb>
      <Layout
        style={{
          padding: "24px 0",
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <Sider
          style={{
            background: colorBgContainer,
          }}
          width={200}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={[currentApp]}
            defaultOpenKeys={[currentApp.includes("post") && "posts"]}
            style={{
              height: "100%",
            }}
            items={items2}
            onClick={(value) => {
              setCurrentApp(value.key);
              navigate(value.key);
            }}
          />
        </Sider>
        <Content
          style={{
            padding: "0 24px",
            minHeight: 280,
          }}
        >
          {currentApp === "counter" && <Counter />}
          {currentApp === "view-posts" && <PostsList />}
          {currentApp === "add-post" && <AddPostForm />}
          {currentApp === "view-single-post" && <SinglePostPage />}
          {currentApp === "edit-post" && <EditPostForm />}
          {currentApp === "user" && <UsersList />}
          {currentApp === "view-user" && <UserPage />}
          {currentApp === "todo" && <TodoList />}
          {/* <Button onClick={() => dispatch(increaseCount())}>{count}</Button> */}
        </Content>
      </Layout>
    </Content>
  );
};
export default Home;
