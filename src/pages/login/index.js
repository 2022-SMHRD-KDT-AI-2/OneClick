import React, {useEffect, useState} from "react";
import axios from "axios";
import {useRecoilState} from "recoil";
import {userData} from "../../atom/atom";
import {useNavigate} from "react-router-dom";
import {Cookies} from "react-cookie";

import {
  Header,
  Label,
  Button,
  Input,
  Form,
  Error,
  LinkContainer,
  AuthContainer,
} from "./styles";

axios.defaults.withCredentials = true;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useRecoilState(userData);
  const nav = useNavigate();
  const cookies = new Cookies()
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    axios
        .post("http://localhost:7501/users/login", {
          email: email,
          password: password,
        })
        .then((res) => {
          const {admin, preset} = res.data;
          setUser({
            admin: admin,
            preset: preset,
          });
          nav("/");
        })
        .catch((err) => console.error(err));
  };

  const logout = () => {
    axios.get("http://localhost:7501/users/logout");
  };

  useEffect(() => {
    const token = cookies.get("token")
    if (token) nav("/")
  }, [])
  return (
      <AuthContainer>
        <Header>O N E C L I C K</Header>
        <Form onSubmit={onSubmit}>
          <Label>
            <span>E M A I L</span>
            <div>
              <Input type="email" value={email} onChange={onChangeEmail}></Input>
            </div>
            {!email && <Error>Email을 입력해주세요!</Error>}
          </Label>
          <Label>
            <span>P A S S W O R D</span>
            <div>
              <Input
                  type="password"
                  value={password}
                  onChange={onChangePassword}
              ></Input>
            </div>
            {!password && <Error>Password를 입력해주세요!</Error>}
          </Label>
          <Button type="submit">L O G I N</Button>
          <LinkContainer
              onClick={() => {
                nav("/signup");
              }}
          >
            SIGNUP
          </LinkContainer>
          <LinkContainer
              onClick={() => {
                nav("/");
              }}
          >
            MAIN
          </LinkContainer>
        </Form>
      </AuthContainer>
  );
}

export default Login;
