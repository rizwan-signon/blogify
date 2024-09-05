import { useSelector } from "react-redux";
const SavedBlogs = () => {
  const { savedBlogs } = useSelector((state) => state.blog);
  console.log(savedBlogs);
  return (
    <div>
      {savedBlogs.map((blog) => (
        <div key={blog._id}>
          <h1>{blog.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default SavedBlogs;
