import React, { useState } from "react";
import "./register.css";
import { Container, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name) {
      alert("name is required");
    } else if (!email) {
      alert("email is required");
    } else if (!password) {
      alert("password is required");
    }

    try {
      const res = await axios.post(`http://localhost:5000/api/users/register`, {
        name,
        email,
        password,
      });
      // console.log(res);
      alert(`${res.data.message}`);
      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.log(err.message);
      alert(`Registration failed!`);
    }
  };

  return (
    <>
      <Container className="mt-5 pt-5">
        <Row>
          <Col md={6} className="mx-auto mt-5">
            <h2 className="text-center mb-5 fw-bold">User Register</h2>
            <Form className="mt-5 pt-5" onSubmit={handleSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="fw-bold">Name </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="your name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="fw-bold">Email </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="fw-bold">Password </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="type your password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
