import { Link, useParams, useLocation } from "react-router-dom";
import queryString from "query-string";

const Blog = (props) => {
  const { id } = useParams();
  const { search } = useLocation();
  const name = queryString.parse(search);

  return (
    <div className="flex-column">
      <h2 style={{ marginBottom: "12px" }}>Blog - {id}</h2>
      <Link to="/blogs" className="primary-btn">
        Back to Blogs
      </Link>
    </div>
  );
};

export default Blog;
