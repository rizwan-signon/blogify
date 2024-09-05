import { addBlogs } from "@/statemanagement/slices/blog.slice";
import blogImage from "../assets/images/hero.png.jpg";
import { Trash2Icon, SquarePen } from "lucide-react";
import { useDispatch } from "react-redux";
import { useToast } from "@/hooks/use-toast";
const BlogCard = ({ blog }) => {
  const { toast } = useToast();
  const dispatch = useDispatch();
  const handleClick = (blog) => {
    toast({
      title: "blog saved",
      description: "visit latter to read ",
    });
    dispatch(addBlogs(blog));
  };
  return (
    <div className="flex items-start gap-3 p-4 border m-4 rounded-lg relative mt-0">
      <div className=" absolute top-2 left-2 flex items-center gap-3">
        <Trash2Icon
          onClick={() => handleClick(blog)}
          className=" opacity-20 cursor-pointer hover:opacity-100 "
        />
        <SquarePen className=" opacity-20 cursor-pointer hover:opacity-100" />
      </div>
      <div className="w-2/5 ">
        <img
          src={`http://localhost:4000/${blog.image}`}
          alt="image"
          className="h-[200px] w-full object-cover rounded-lg"
        />
      </div>
      <div className="w-3/5">
        <h1 className="text-4xl font-bold capitalize">{blog.title}</h1>
        <div className=" flex items-center gap-3">
          <h3 className="font-bold text-xl">@{blog.author}</h3>
          <p>date 23/22/2024 6 pm</p>
        </div>
        <p className=" text-xl">{blog.description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
