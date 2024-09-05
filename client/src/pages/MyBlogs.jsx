import { useSelector } from "react-redux";
import { Trash } from "lucide-react";
import { Pencil } from "lucide-react";
const MyBlogs = () => {
  const { loggedInBlogs } = useSelector((state) => state.blog);
  console.log(loggedInBlogs);
  return (
    <div className=" grid grid-cols-3 gap-4 px-2">
      {loggedInBlogs?.map((blog) => (
        <div
          key={blog?._id}
          className="bg-gray-800  h-[300px] rounded-lg p-3 w-full flex justify-between flex-col"
        >
          <div className="w-full">
            <h1 className="text-4xl font-medium capitalize truncate">
              {blog?.title}
            </h1>
            <p>createdBy @{blog?.createdBy?.userName}</p>
            <p className="text-xl line-clamp-4">{blog?.description}</p>
          </div>
          <div className=" flex items-center justify-between">
            <Trash className="opacity-20 hover:opacity-100 cursor-pointer" />
            <Pencil className="opacity-20 hover:opacity-100 cursor-pointer" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyBlogs;
