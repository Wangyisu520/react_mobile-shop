import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { login } from "../actions/userActions";
import Container from "../components/FormContainer";
const LoginScreen = ({ history, location }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = location.search ? location.search.split("=")[1] : "/";
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  //表单提交函数
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, redirect, userInfo]);

  return (
    <Container>
      <h1>登陆</h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>邮箱地址:</Form.Label>
          <Form.Control
            type="email"
            placeholder="请输入邮箱"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>密码:</Form.Label>
          <Form.Control
            type="password"
            placeholder="请输入密码"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          登录
        </Button>
        <Row className="py-3">
          <Col>
            新用户?
            <Link
              to={redirect ? `/register?redirect=${redirect}` : "/register"}
            >
              去注册
            </Link>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default LoginScreen;
