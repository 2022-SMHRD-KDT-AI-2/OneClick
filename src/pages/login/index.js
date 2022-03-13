import React, { useCallback, useEffect, useMemo } from "react";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { userData } from "../../atom/atom";
import { useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";

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
import { FlexRowDiv } from "../../styles";
import useInputJson from "../../utils/useInputJson";

axios.defaults.withCredentials = true;

function Login() {
  const [formData, onChangeFormData] = useInputJson({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const setUser = useSetRecoilState(userData);
  const nav = useNavigate();
  const cookies = useMemo(() => new Cookies(), []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (email && password) {
        axios
          .post("http://localhost:7501/users/login", {
            email: email,
            password: password,
          })
          .then((res) => {
            const { admin, preset } = res.data;
            setUser({
              admin: admin,
              preset: preset,
            });
            nav("/");
          })
          .catch((err) => console.error(err));
      } else {
        alert("모든 정보를 입력해주세요!");
      }
    },
    [formData, nav, setUser]
  );

  useEffect(() => {
    const token = cookies.get("token");
    if (token) nav("/");
  }, [cookies, nav]);

  return (
    <AuthContainer>
      <Header>O N E C L I C K</Header>
      <Form onSubmit={onSubmit}>
        <Label>
          <span>E M A I L</span>
          <div>
            <Input
              type="email"
              value={email}
              onChange={onChangeFormData}
              name="email"
            />
          </div>
          {!email && <Error>Email을 입력해주세요!</Error>}
        </Label>
        <Label>
          <span>P A S S W O R D</span>
          <div>
            <Input
              value={password}
              name="password"
              onChange={onChangeFormData}
            ></Input>
          </div>
          {!password && <Error>Password를 입력해주세요!</Error>}
        </Label>
        <Button type="submit">L O G I N</Button>
        <FlexRowDiv>
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
        </FlexRowDiv>
      </Form>
    </AuthContainer>
  );
}

export default Login;
