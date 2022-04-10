import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Protected } from "./Protected";
import { RequireAuth } from "./RequireAuth";
import { Login } from "./Login";
import { ProtectedSecond } from "./ProtectSecond";
import { Authenticator } from "@aws-amplify/ui-react";
import { Home } from "./Home";
import { Layout } from "./Layout";
import "./App.css";

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
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
  );
}

function App() {
  return (
    <Authenticator.Provider>
      <MyRoutes />
    </Authenticator.Provider>
  );
}

export default App;
