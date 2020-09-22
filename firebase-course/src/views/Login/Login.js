import React, { useState, useContext, useEffect } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { firebaseApp } from "../../config/firebaseConfig";
import { Auth } from "../../services/Contexts/AuthContext";

const Login = ({ history }) => {
  // const [signup, setsignup] = useState(false);
  const { usuario } = useContext(Auth);
  const [error, seterror] = useState('')

  useEffect(() => {
    //Si hay user se redirige al dashboard
    if (usuario) {
      history.push("/");
    }
  }, [history, usuario]);

  const correoClave = async e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    // console.log(email, password);

    await firebaseApp
      .auth()
      .signInWithEmailAndPassword(email.value, password.value)
      .then(result => {
        // console.log(result);
        history.push("/");
      })
      .catch(error => {
        console.log(error)
        seterror(error.message)
      });
  };

    return (
      <Container style={{ height: "100vh" }}>
        <Form onSubmit={correoClave}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </Container>
    );
};
export default Login;