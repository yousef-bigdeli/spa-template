import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <p>404, page is not found!</p>
      <Link to="/">Go home</Link>
    </div>
  );
};

export default NotFound;
