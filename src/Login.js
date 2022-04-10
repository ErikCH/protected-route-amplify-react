import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
export function Login() {
  const { route } = useAuthenticator((context) => [context.route]);
  const navigate = useNavigate();
  useEffect(() => {
    if (route === "authenticated") {
      navigate("/protected");
    }
  }, [route, navigate]);
  return (
    <div className="auth-wrapper">
      <Authenticator></Authenticator>
    </div>
  );
}
