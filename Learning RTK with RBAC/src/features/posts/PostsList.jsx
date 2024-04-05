import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPostIds,
  selectAllPosts,
  getPostsError,
  getPostsStatus,
  // fetchPosts,
} from "./postsSlice";
import { Col, Row } from "antd";
import { Card, Divider } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { Skeleton } from "antd";
import { useNavigate } from "react-router-dom";
import PostsExcerpt from "./PostsExcerpt";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
const { Search } = Input;
const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const orderedPostsIds = useSelector(selectPostIds);
  const onSearch = (value, _e, info) => {
    console.log("search", _e, info?.source, value);
    setSearchValue(value);
  };
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);
  const [searchValue, setSearchValue] = useState("");
  let searchedIds = posts
    .filter((post) =>
      post.title.toLowerCase().includes(searchValue.toLowerCase())
    )
    .map((post) => post.id);
  const filteredIds = searchedIds.length > 0 ? searchedIds : orderedPostsIds;
  console.log("searchedIds", searchedIds);
  //  const dispatch = useDispatch();
  const navigate = useNavigate();

  //   useEffect(() => {
  //     if (postsStatus === "idle") {
  //       dispatch(fetchPosts());
  //     }
  //   }, [postsStatus, dispatch]);

  let content;
  if (postsStatus === "loading") {
    content = [0, 1, 2, 3].map((value) => (
      <Col xs={12} sm={12} md={12} lg={12} xl={12} key={value}>
        <Card
          title={<Skeleton paragraph={false} />}
          bordered={true}
          style={{
            width: "100%",
          }}
        >
          <Skeleton />
          <Divider />
          <Skeleton paragraph={false} />
        </Card>
      </Col>
    ));
  } else if (postsStatus === "succeeded") {
    // const orderedPosts = posts
    //   .slice()
    //   .sort((a, b) => b.date.localeCompare(a.date));
    // console.log("orderedPosts",orderedPosts,[...new Set(orderedPosts)]); //shows duplicates
    // content =  posts.map((post) => (
    //   <Col xs={12} sm={12} md={12} lg={12} xl={12} key={post.id}>
    //     <PostsExcerpt post={post} />
    //   </Col>
    // ));
    // console.log("orderedPostsIds", orderedPostsIds);
    content = filteredIds.map((postId) => (
      <Col xs={12} sm={12} md={12} lg={12} xl={12} key={postId}>
        <PostsExcerpt postId={postId} />
      </Col>
    ));
  } else if (postsStatus === "failed") {
    content = (
      <Col xs={12} sm={12} md={12} lg={12} xl={12}>
        <h3 style={{ textAlign: "center" }}>{postsError}</h3>{" "}
      </Col>
    );
  }

  return (
    <section>
      <Search
        placeholder="Search..."
        onSearch={onSearch}
        allowClear
        enterButton="Search"
        size="large"
        style={{
          //width: "100%",
          marginBottom: "24px",
        }}
      />

      <Row gutter={[16, 16]}>{content}</Row>
    </section>
  );
};

export default PostsList;
