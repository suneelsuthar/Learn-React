import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {useNavigate} from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate()

  const signin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate('home')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div>
      <Container>
        <Form>
          <h1>Login page</h1>
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
          <Button variant="primary" onClick={() => signin()}>
            Login
          </Button>

          <p onClick={()=>navigate("signup")}>Dont have an account?</p>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
