import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { auth } from "../firebase";

import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };

  return (
    <div>
      <Container>
        <Form>
          <h1>Signup page</h1>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              size="lg"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control
              size="lg"
              type="password"
              value={password}
              placeholder="name@example.com"
              onChange={(e) => setpassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" onClick={() => register()}>
            Signup
          </Button>

          <p onClick={() => navigate("/")}>Already have an account?</p>
        </Form>
      </Container>
    </div>
  );
};

export default Signup;
