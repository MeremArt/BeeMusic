import React from "react";
import { accessUrl } from "../Bee";
import "./Login.css";
import { screen } from "../Data";

function Login() {
  return (
    <div className="login">
      {screen.map((view) => {
        const { image } = view;
        return (
          <>
            <img src={image} alt="Beelogo" />
            <a href={accessUrl}>LOGIN TO BEEMUSIC</a>
          </>
        );
      })}
    </div>
  );
}

export default Login;
