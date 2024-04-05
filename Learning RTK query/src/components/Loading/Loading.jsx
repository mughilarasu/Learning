import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import React from "react";

const Loading = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
    </div>
  );
};

export default Loading;
