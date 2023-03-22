import {NavLink} from "react-router-dom";


function PageNotFound() {
  return (
    <div>
      <h1>Page not found</h1>
      <NavLink to={'/'}>Home</NavLink>
    </div>
  );
}

export default PageNotFound;
