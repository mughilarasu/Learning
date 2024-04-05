import React from "react";
import { Button, Result } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
const ServerError = () => (
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
      title="500"
      icon={<CloseCircleOutlined style={{ color: "red" }} />}
      subTitle="Sorry, something went wrong."
      extra={
        <Link to="/login">
          <Button type="primary">Back Home</Button>
        </Link>
      }
    />
  </Content>
);
export default ServerError;
