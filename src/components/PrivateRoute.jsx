import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/authContext'; // replace with the actual path to your Auth context

function PrivateRoute({ component: Component, ...rest }) {
  const { token } = useAuth();

  return (
    <Route
      {...rest}
      render={props =>
        token ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

export default PrivateRoute;