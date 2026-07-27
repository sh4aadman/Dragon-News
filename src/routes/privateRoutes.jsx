import { Navigate, useLocation } from "react-router";
import Loading from "../components/ui/Loading/Loading";
import { AuthContext } from "../context/Auth/AuthProvider";
import { use } from "react";

function PrivateRoutes({ children }) {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (user && user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to={"/auth/login"} />;
}

export default PrivateRoutes;
