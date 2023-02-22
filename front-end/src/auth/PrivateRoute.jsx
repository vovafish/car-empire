import { Route, Navigate } from 'react-router-dom';
import { useUser } from './useUser';

export const PrivateRoute = ({ children }) => {
  const user = useUser();

  return user ? children : <Navigate to="/login" />;
};
