import React from "react";
import { Button, Layout, Menu } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
const { Header: HeaderComponent } = Layout;
const items1 = ["Home"].map((key) => ({
  key: "/",
  label: key,
}));
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <HeaderComponent
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[
          location.pathname.toLowerCase().replace("/", "") || "/",
        ]}
        items={items1}
        onClick={(value) => {
          navigate(value.key);
        }}
        style={{
          flex: 1,
          minWidth: 0,
        }}
      />
    </HeaderComponent>
  );
};
export default Header;
