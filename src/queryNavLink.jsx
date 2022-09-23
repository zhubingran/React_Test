import { useLocation, NavLink } from 'react-router-dom';

function QueryNavLink({ to, ...props }) {
  let location = useLocation();
  return <NavLink tp={to + location.search} {...props} />;
}
