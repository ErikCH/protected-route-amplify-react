import "./App.css";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";

function App() {
  const { route, signOut } = useAuthenticator((context) => [
    context.route,
    context.signOut,
  ]);
  const navigate = useNavigate();

  function logOut() {
    signOut();
    navigate("/login");
  }
  return (
    <>
      <nav>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/protected")}>Protected</button>
        {route !== "authenticated" ? (
          <button onClick={() => navigate("/login")}>Login</button>
        ) : (
          <button onClick={() => logOut()}>Logout</button>
        )}
      </nav>
      <h1>Welcome To This Sample Route App</h1>
      <span>
        {route === "authenticated"
          ? "You are logged in!"
          : "You are logged out!"}
      </span>

      <Outlet />
    </>
  );
}

export default App;
