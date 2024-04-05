import React, { useEffect } from "react";
import { Button, Card, Input } from "antd";
import { Content } from "antd/es/layout/layout";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

import { useLocation, useNavigate, useParams } from "react-router-dom";

//import { nanoid } from "@reduxjs/toolkit";
//import { postAdded } from "./postsSlice";
import { updatePost, selectPostById } from "./postsSlice";

import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
const items = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];
const fieldStyles = {
  //padding: 8,
  margin: "8px 0px",
};
const EditPostForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { postId } = useParams();
  const post = useSelector((state) => selectPostById(state, Number(postId)));
  const users = useSelector(selectAllUsers);
  const dispatch = useDispatch();

  const userRef = React.useRef();
  const errorRef = React.useRef();
  const [title, setTitle] = React.useState(post?.title);
  const [content, setContent] = React.useState(post?.body);
  const [userId, setUserId] = React.useState(post?.userId);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [addRequestStatus, setAddRequestStatus] = React.useState("idle");
  const [loading, setLoading] = React.useState(false);
  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    setErrorMessage("");
  }, [title, content]);
  const canSave =
    [title, content, userId === 0 ? 1 : userId].every(Boolean) &&
    addRequestStatus === "idle";

  const onSavePostClicked = () => {
    setLoading(true);

    // if (title && content) {
    //   //   dispatch(
    //   //     postAdded({
    //   //       id: nanoid(),
    //   //       title,
    //   //       content,
    //   //     })
    //   //   );
    //   dispatch(addNewPost(title, content, userId));
    //   setTitle("");
    //   setContent("");
    //   setUserId("");
    //   setLoading(false);
    //   navigate("/view-posts");
    // }

    if (canSave) {
      try {
        setAddRequestStatus("pending");
        dispatch(
          updatePost({
            id: post?.id,
            title,
            body: content,
            userId,
            reactions: post?.reactions,
          })
        ).unwrap();
        setTitle("");
        setContent("");
        setUserId("");
        setLoading(false);
        navigate("/view-posts");
      } catch (error) {
        setErrorMessage("Failed to save the post");
        setLoading(false);
        console.error("Failed to save the post", error);
      } finally {
        setLoading(false);
        setAddRequestStatus("idle");
      }
    }

    //errorRef.current.focus();
  };

  console.log(
    "users",
    users,
    title,
    content,
    userId,
    addRequestStatus,
    canSave
  );
  if (!post) {
    return (
      <section>
        <Button onClick={() => navigate(-1)}>Go Back</Button>
        <h2 style={{ textAlign: "center" }}>Post not found!</h2>
      </section>
    );
  }
  return (
    <>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
      <Content
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          bordered={false}
          style={{
            width: 360,
          }}
        >
          <p
            ref={errorRef}
            className={errorMessage ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errorMessage}
          </p>
          <form>
            <Input
              placeholder="Title"
              style={fieldStyles}
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              required
            />
            <Input
              placeholder="Content"
              style={fieldStyles}
              type={"text"}
              onChange={(e) => setContent(e.target.value)}
              value={content}
              required
            />

            <Dropdown.Button
              style={{
                margin: "8px 0px",
                width: "100%",
              }}
              icon={<DownOutlined />}
              menu={{
                items: users,
                onClick: (e) => {
                  console.log(e);
                  setUserId(Number(e.key) - 1);
                },
              }}
            >
              {users[userId]?.label || "Author"}
            </Dropdown.Button>

            <Button
              type="primary"
              style={{
                margin: "8px 0px",
                width: "100%",
              }}
              onClick={onSavePostClicked}
              disabled={!canSave || loading}
            >
              {loading ? (
                <Spin
                  indicator={
                    <LoadingOutlined
                      style={{
                        fontSize: 24,
                      }}
                      spin
                    />
                  }
                />
              ) : (
                "Update"
              )}
            </Button>
          </form>
        </Card>
      </Content>
    </>
  );
};
export default EditPostForm;
