import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authenticUser } from "@/statemanagement/slices/user.slice";
import { useToast } from "@/hooks/use-toast";
import { loggedInBlogs } from "@/statemanagement/slices/blog.slice";
const Sidebar = () => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const navigate = useNavigate();
  const { loggedInUser } = useSelector((state) => state.user);
  const getAllBlogsByLoggedInUser = async () => {
    const res = await fetch(`/api/getloggedinblogs/${loggedInUser._id}`);
    const data = await res.json();
    dispatch(loggedInBlogs(data));
  };
  const handleLogOut = async () => {
    const response = await fetch("/api/logout", {
      method: "POST",
    });
    const data = await response.json();
    toast({
      description: "logout successfully.",
    });
    const removeUser = localStorage.removeItem("loggedInUser");

    dispatch(authenticUser(removeUser));
    navigate("/");
    console.log(data);
  };
  return (
    <div className="col-span-1 row-span-9 border-2 rounded-xl p-2 flex items-center justify-between flex-col w-[300px]">
      <div>
        <h1 className="text-2xl">{loggedInUser?.userName}</h1>
        <h1 className="">{loggedInUser?.email}</h1>
        <h1>from {loggedInUser?.address}</h1>
        <hr className="my-2" />
      </div>
      <div className=" flex flex-col gap-4 w-full">
        <Link to={"/home"}>
          <h1 className=" p-2 text-xl cursor-pointer rounded-lg w-full border text-center capitalize hover:bg-primary transition-all duration-300">
            all blogs
          </h1>
        </Link>
        <Link onClick={getAllBlogsByLoggedInUser} to={"/home/myblogs"}>
          <h1 className=" p-2 text-xl cursor-pointer rounded-lg w-full border text-center capitalize hover:bg-primary transition-all duration-300">
            my blogs
          </h1>
        </Link>
        <Link to={"/home/savedblogs"}>
          <h1 className=" p-2 text-xl cursor-pointer rounded-lg w-full border text-center capitalize hover:bg-primary transition-all duration-300">
            saved blogs
          </h1>
        </Link>
        <Link to="/home/createblog">
          <h1 className=" p-2 text-xl cursor-pointer rounded-lg w-full border text-center capitalize hover:bg-primary transition-all duration-300">
            create blog
          </h1>
        </Link>
        <h1
          onClick={handleLogOut}
          className=" p-2 text-xl cursor-pointer rounded-lg w-full border text-center capitalize hover:bg-primary transition-all duration-300"
        >
          logout
        </h1>
      </div>
    </div>
  );
};

export default Sidebar;
