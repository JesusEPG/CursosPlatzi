import React, { useEffect, useState } from "react";
import { firebaseApp } from "../../config/firebaseConfig";

export const Auth = React.createContext();

export const AuthContext = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    //Watcher del estado de auth

    firebaseApp.auth().onAuthStateChanged((user) => {
      console.log(user);
      setShowChild(true);
      if (user) {
        console.log("Inicio sesion")
        setUsuario(user);
      } else {
        console.log("cerro sesion")
        setUsuario(null);
      }
    });
  }, []);

  if (!showChild) {
    return <h1>Cargando...</h1>
  } else {
    return (
      <Auth.Provider
        value={{
          usuario
        }}
      >
        {children}
      </Auth.Provider>
    );
  }
};