import { Link } from "react-router-dom";

const blogs = [
  { id: 1, name: "Blog 1" },
  { id: 2, name: "Blog 2" },
  { id: 3, name: "Blog 3" },
];

const Blogs = () => {
  return (
    <div>
      <h2>Blogs</h2>
      <div className="flex-column">
        {blogs.map(({ id, name }) => (
          <Link
            to={{ pathname: `/blogs/${id}`, search: "name" }}
            key={id}
            className="primary-btn"
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
