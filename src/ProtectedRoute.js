import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";

export function ProtectedRoute(Comp) {
  return function WrappedWithProtectedRoute(props) {
    const navigate = useNavigate();
    const { route } = useAuthenticator((context) => [context.route]);
    console.log("route", route);
    useEffect(() => {
      if (route === "signIn" || route === "setup") {
        navigate("/login");
      }
    }, [route, navigate]);
    return <Comp {...props} />;
  };
}
