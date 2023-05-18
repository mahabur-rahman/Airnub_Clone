import React from "react";
import "./login.css";
import { Container, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Container className="mt-5 pt-5">
        <Row>
          <Col md={6} className="mx-auto mt-5">
            <h2 className="text-center mb-5 fw-bold">User Login</h2>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="fw-bold">Emai </Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="fw-bold">Password </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="type your password"
                />
              </Form.Group>
              <button className="btn btn-primary w-100">Login</button>
              <div className="text-center mt-2">
                Don't have an account yet?
                <Link to={"/register"} className="fw-bold mx-2">
                  Register Now
                </Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
