import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  ) : auth?.user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
