import React from "react";
import { Button, Result } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
const Not404Found = () => (
  <Content
    style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Result
      // status="404"
      title="404"
      icon={<CloseCircleOutlined style={{ color: "red" }} />}
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link to="/login">
          <Button type="primary">Back Home</Button>
        </Link>
      }
    />
  </Content>
);
export default Not404Found;
