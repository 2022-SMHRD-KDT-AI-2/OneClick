import React, { useCallback, useEffect, useMemo } from "react";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { userData, presetData } from "../../atom/atom";
import { useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";
import { URL } from "../../utils/data";

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
  const setPreset = useSetRecoilState(presetData);
  const nav = useNavigate();
  const cookies = useMemo(() => new Cookies(), []);

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (email && password) {
        await axios
          .post(URL + "/users/login", {
            email: email,
            password: password,
          })
          .then(async (res) => {
            if (res.data.success) {
              const { admin, preset, shopId } = res.data;
              await setUser({
                admin: admin,
                shop: shopId,
              });
              await setPreset(preset);
              nav("/");
            }
          })
          .catch((err) => console.error(err));
      } else {
        alert("모든 정보를 입력해주세요!");
      }
    },
    [email, password, nav, setUser, setPreset]
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
