import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>404, Page is not found!</h2>
      <Link to="/" className='back-btn'>Back to Home</Link>
    </div>
  );
};

export default NotFound;
