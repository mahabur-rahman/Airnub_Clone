import React from "react";
import "./register.css";
import { Container, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <Container className="mt-5 pt-5">
        <Row>
          <Col md={6} className="mx-auto mt-5">
            <h2 className="text-center mb-5 fw-bold">User Register</h2>
            <Form className="mt-5 pt-5">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="fw-bold">Email </Form.Label>
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
              <button className="btn btn-primary w-100">Register</button>
              <div className="text-center mt-2">
                Already a member?
                <Link to={"/login"} className="fw-bold mx-2">
                  Login
                </Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
