import React from "react";
import { Button, Result } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
const Unauthorized = () => (
  <Content
    style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Result
      // status="403"
      title="403"
      icon={<LockOutlined style={{ color: "red" }} />}
      subTitle="Sorry, you are not authorized to access this page."
      extra={
        <Link to="/login">
          <Button type="primary">Back Home</Button>
        </Link>
      }
    />
  </Content>
);
export default Unauthorized;
