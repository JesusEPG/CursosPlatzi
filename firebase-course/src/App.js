import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import logo from './logo.svg';
import {Button} from "reactstrap";

import './App.css';
import { Auth } from './services/Contexts/AuthContext';
import { firebaseApp } from './config/firebaseConfig';

function App({history}) {

  const { usuario } = useContext(Auth);
  console.log("User en app: ", usuario);

  const logout = () => {
    firebaseApp.auth().signOut()
      .then(response => {
        console.log("response", response);
        history.push("/login")
      })
      .catch(error => {
        console.log(error)
      })
  }

  if (usuario) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button onClick={logout}>Salir</Button>
        </header>
      </div>
    );
  } else {
    return <Redirect to="/login" />
  }

  
}

export default App;
