import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Layout as LayoutComponent } from "antd";
import Loading from "./components/Loading/Loading";
export default function Layout() {
  return (
    <LayoutComponent>
      <Header />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      <Footer />
    </LayoutComponent>
  );
}
