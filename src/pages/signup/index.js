import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {Cookies} from "react-cookie";
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

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [admin, setAdmin] = useState(false);
  const cookies = new Cookies()
  const onChangeCheck = (e) => {
    setAdmin(e.target.checked);
    console.log(!admin);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangePasswordCheck = (e) => {
    setPasswordCheck(e.target.value);
  };
  const nav = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    axios
        .post("http://localhost:7501/users/signup", {
          email: email,
          password: password,
          admin: admin,
        })
        .then((res) => {
          nav("/login");
        });
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
          </Label>
          <Label>
            <span>P A S S W O R D C H E C K</span>
            <div>
              <Input
                  type="password"
                  value={passwordCheck}
                  onChange={onChangePasswordCheck}
              ></Input>
            </div>
            {password !== passwordCheck && (
                <Error>Password가 서로 다릅니다!</Error>
            )}
          </Label>
          <Label>
            <div>
              <span>A D M I N</span>
              <Check type="checkbox" onChange={onChangeCheck}/>
            </div>
          </Label>
          <Button type="submit">L O G I N</Button>
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
        </Form>

      </AuthContainer>
  );
}

export default Signup;
