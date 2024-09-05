import BlogCard from "@/components/BlogCard";
import { useState, useEffect } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    const res = await fetch("/api/getblogs");
    const data = await res.json();
    console.log(data);
    setBlogs(data);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div className="">
      {blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default Blogs;
