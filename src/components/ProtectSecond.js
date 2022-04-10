import { useAuthenticator } from "@aws-amplify/ui-react";
export function ProtectedSecond() {
  const { route } = useAuthenticator((context) => [context.route]);

  const message =
    route === "authenticated" ? "SECOND PROTECTED ROUTE!" : "Loading...";
  return <h1>{message}</h1>;
}
