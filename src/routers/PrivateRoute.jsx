import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children, isAuthenticated }) => {


  // const { pathname, search} = useLocation();

  // localStorage.setItem("lastPath", pathname + search);


  return isAuthenticated ? children : <Navigate to='/auth/login' />;
};
