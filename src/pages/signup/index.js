import React, { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";
import {
  AuthContainer,
  Button,
  Check,
  Error,
  Form,
  Header,
  Input,
  Label,
  LinkContainer,
} from "../login/styles";
import { FlexRowDiv } from "../../styles";
import useInputJson from "../../utils/useInputJson";
import { URL } from "../../utils/data";
import { axiosInstance } from "../../utils/axiosInstance";

function Signup() {
  const [formData, onChangeFormData] = useInputJson({
    email: "",
    password: "",
    passwordCheck: "",
  });
  const { email, password, passwordCheck } = formData;

  const nav = useNavigate();
  const cookies = useMemo(() => new Cookies(), []);

  const [admin, setAdmin] = useState(false);
  const onChangeCheck = (e) => setAdmin(e.target.checked);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (email && password && passwordCheck && passwordCheck === password) {
        axios
          .post("http://localhost:7501/users/signup", {
            email: email,
            password: password,
            admin: admin,
          })
          .then((res) => {
            console.log(res.data);
            //if (res.data.success) nav("/login");
          });
      } else {
        alert("모든 정보를 입력하여 주세요!");
      }
    },
    [nav, admin, email, password, passwordCheck]
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
              name="email"
              value={email}
              onChange={onChangeFormData}
              placeholder="test@test.com"
            ></Input>
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
              placeholder="영대소문자/숫자 혼용하여 13자 이내로 입력해주세요"
            ></Input>
          </div>
        </Label>
        <Label>
          <span>P A S S W O R D C H E C K</span>
          <div>
            <Input
              value={passwordCheck}
              name="passwordCheck"
              onChange={onChangeFormData}
              placeholder="입력한 Password와 똑같이 입력해주세요"
            ></Input>
          </div>
          {password !== passwordCheck && (
            <Error>Password가 서로 다릅니다!</Error>
          )}
        </Label>
        <Label>
          <div>
            <span>A D M I N</span>
            <Check type="checkbox" onChange={onChangeCheck} />
          </div>
        </Label>
        <Button type="submit">S I G N U P</Button>
        <FlexRowDiv>
          <LinkContainer
            onClick={() => {
              nav("/login");
            }}
          >
            LOGIN
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

export default Signup;
