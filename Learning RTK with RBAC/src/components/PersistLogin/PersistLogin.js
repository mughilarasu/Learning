import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import axios from "axios";

const PersistLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [isLoading, setIsLoading] = useState(true);
  const { auth, persist, email, password, setAuth } = useAuth();
  console.log("sd");
  useEffect(() => {
    let isMounted = true;

    const verifyRefreshToken = async () => {
      try {
        const response = await axios.post(
          `https://reqres.in/api/login`,
          JSON.stringify({ email, password }),
          {
            headers: { "Content-Type": "application/json" },
            //  withCredentials: true,
          }
        );
        console.log(JSON.stringify(response?.data));
        //console.log(JSON.stringify(response));
        const accessToken = response?.data?.token;
        // const roles = [];
        const roles = ["admin"];
        const screens = ["Home", "Edit"];
        setAuth({ email, password, roles, screens, accessToken, user: true });
        navigate(from, { replace: true });
      } catch (err) {
        console.log("err", err);
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    // persist added here AFTER tutorial video
    // Avoids unwanted call to verifyRefreshToken
    !auth?.accessToken && persist ? verifyRefreshToken() : setIsLoading(false);

    return () => (isMounted = false);
  }, []);

  useEffect(() => {
    console.log(`isLoading: ${isLoading}`);
    console.log(`aT: ${JSON.stringify(auth?.accessToken)}`);
  }, [isLoading]);

  return (
    <>
      {!persist ? (
        <Outlet />
      ) : isLoading ? (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {" "}
          <Spin
            indicator={
              <LoadingOutlined
                style={{
                  fontSize: 24,
                }}
                spin
              />
            }
          />{" "}
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default PersistLogin;
