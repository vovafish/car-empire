import { Route, Navigate } from 'react-router-dom';
import { useUser } from './useUser';

export const PrivateRoute = ({ props }) => {
  const user = useUser();

  return user ? props : <Navigate to="/login" />;

  //return <Route {...props} />;
};
