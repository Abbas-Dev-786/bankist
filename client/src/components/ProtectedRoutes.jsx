import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const user = false;

  return user ? children : <Navigate to="/auth" />;
};

export default ProtectedRoutes;

ProtectedRoutes.propTypes = {
  children: PropTypes.any,
};
