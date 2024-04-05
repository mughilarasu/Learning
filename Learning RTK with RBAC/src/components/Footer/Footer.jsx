import React from "react";
import { Layout } from "antd";
const { Footer: FooterComponent } = Layout;
const Footer = () => {
  return (
    <FooterComponent
      style={{
        textAlign: "center",
        background: "#e3e3e3",
      }}
    >
      Booking System ©{new Date().getFullYear()} Created by Mughilarasu Muthuvel
    </FooterComponent>
  );
};
export default Footer;
