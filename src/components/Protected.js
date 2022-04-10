import { useAuthenticator } from "@aws-amplify/ui-react";
export function Protected() {
  const { route } = useAuthenticator((context) => [context.route]);

  const message =
    route === "authenticated" ? "FIRST PROTECTED ROUTE!" : "Loading...";
  return <h1>{message}</h1>;
}
