import "./index.css";
import App from "./App";

import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Protected } from "./Protected";
import { Authenticator } from "@aws-amplify/ui-react";
import { RequireAuth } from "./RequireAuth";
import { Login } from "./Login";
import { ProtectedSecond } from "./ProtectSecond";

const container = document.getElementById("root");
const root = createRoot(container);

Amplify.configure(awsExports);
root.render(
  <Authenticator.Provider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <Protected />
              </RequireAuth>
            }
          />
          <Route
            path="/protected2"
            element={
              <RequireAuth>
                <ProtectedSecond />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Authenticator.Provider>
);

function Home() {
  return (
    <h3>Please use the buttons at the top to test out protected routes!</h3>
  );
}
