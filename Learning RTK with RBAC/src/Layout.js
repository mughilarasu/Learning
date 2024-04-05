import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Layout as LayoutComponent } from "antd";
export default function Layout() {
  return (
    <LayoutComponent>
      {/* <Header /> */}
      <Outlet />
      {/* <Footer /> */}
    </LayoutComponent>
  );
}
