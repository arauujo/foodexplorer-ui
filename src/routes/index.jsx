import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { useAuth } from "@hooks/auth";

export function Routes() {
  const isAuthenticated = useAuth().user;

  if (isAuthenticated === undefined) {
    return <div>Carregando...</div>;
  }

  return (
    <BrowserRouter>
      {isAuthenticated ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
}
