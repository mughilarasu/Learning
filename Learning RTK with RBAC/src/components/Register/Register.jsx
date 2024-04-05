import React, { useEffect } from "react";
import { Button, Card, Input } from "antd";
import { Content } from "antd/es/layout/layout";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
const fieldStyles = {
  //padding: 8,
  margin: "8px 0px",
};
const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { setAuth } = useAuth();
  const userRef = React.useRef();
  const errorRef = React.useRef();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    setErrorMessage("");
  }, [email, password]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (password === confirmPassword) {
      try {
        const response = await axios.post(
          `https://reqres.in/api/register`,
          JSON.stringify({ email, password }),
          {
            headers: { "Content-Type": "application/json" },
            // withCredentials: true,
          }
        );
        console.log(JSON.stringify(response?.data));
        //console.log(JSON.stringify(response));
        const accessToken = response?.data?.accessToken;
        const roles = ["admin"];
        const screens = ["Home", "Edit"];
        setAuth({ email, password, roles, screens, accessToken,user:true });
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setLoading(false);
        navigate(from, { replace: true });
      } catch (err) {
        if (!err?.response) {
          setErrorMessage("No Server Response");
        } else if (err.response?.status === 400) {
          setErrorMessage("Error Occurred");
        } else if (err.response?.status === 401) {
          setErrorMessage("Unauthorized");
        } else {
          setErrorMessage("Register Failed");
        }
        setLoading(false);
        errorRef.current.focus();
      }
    } else {
      setErrorMessage("Passwords are not matching");
      setLoading(false);
      errorRef.current.focus();
    }
  };
  return (
    <Content
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        bordered={false}
        style={{
          width: 360,
        }}
      >
        <p
          ref={errorRef}
          className={errorMessage ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errorMessage}
        </p>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Email"
            style={fieldStyles}
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            required
          />
          <Input
            placeholder="Password"
            style={fieldStyles}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <Input
            placeholder="Confirm Password"
            style={fieldStyles}
            type="text"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            required
          />
          <Button
            type="primary"
            disabled={loading}
            style={{
              margin: "8px 0px",
              width: "100%",
            }}
            htmlType="submit"
          >
            {loading ? (
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
            ) : (
              "Register"
            )}
          </Button>
        </form>
        <div
          style={{
            margin: "8px 0px",
            width: "100%",
          }}
        >
          <p
            style={{
              margin: "4px 0px",
            }}
          >
            Already have an account ?
          </p>
          <Link to="/login">Login</Link>
        </div>
      </Card>
    </Content>
  );
};
export default Register;
