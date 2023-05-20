import { useContext, useState } from "react";
import "./login.css";
import { Container, Form, Row, Col } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  // user context
  const { user, setUser } = useContext(UserContext);

  // handleLoginSubmit / form submission with data
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `/login`,
        {
          email,
          password,
        },
        { credentials: "include" }
      );
      // console.log(data);
      setUser(data);
      alert(`Login successful`);
      setEmail("");
      setPassword("");
      setRedirect(true);
    } catch (err) {
      alert(`Login failed`);
    }
  };

  // console.log(`Login page user info: `, user);
  if (redirect) {
    return <Navigate to={`/`} />;
  }

  return (
    <>
      <Container className="mt-5 pt-5">
        <Row>
          <Col md={6} className="mx-auto mt-5">
            <h2 className="text-center mb-5 fw-bold">User Login</h2>
            <Form onSubmit={handleLoginSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="fw-bold">Email </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
