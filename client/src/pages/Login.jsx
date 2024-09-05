import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useToast } from "@/hooks/use-toast";
import {
  authenticUser,
  handleError,
} from "@/statemanagement/slices/user.slice";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { toast } = useToast();
  const { error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const logInUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success === false) {
        dispatch(handleError(data.message));
      } else {
        toast({
          title: "login succesfful",
          description: "welcome to user dashboard",
        });
        localStorage.setItem("loggedInUser", JSON.stringify(data));
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        dispatch(authenticUser(loggedInUser));
        navigate("/home");
      }
    } catch (error) {
      dispatch(handleError(error.message));
    }
  };
  return (
    <div className=" flex items-center justify-between min-h-screen mx-auto max-w-md">
      <form
        onSubmit={logInUser}
        className="w-full mx-auto bg-gray-900 p-4 rounded-lg"
      >
        <h1 className=" text-3xl font-bold capitalize text-center mb-6">
          Login
        </h1>
        <div className=" flex items-start flex-col gap-4 w-full">
          <input
            onChange={handleChange}
            className="p-3 w-full rounded-lg outline-none bg-gray-800"
            type="text"
            placeholder="email"
            id="email"
          />
          <input
            onChange={handleChange}
            className="p-3 w-full rounded-lg outline-none bg-gray-800"
            type="text"
            placeholder="password"
            id="password"
          />
          <Button className="p-3 w-full uppercase text-xl font-bold ">
            login
          </Button>
          {error && <p className=" text-red-700 ">{error}</p>}
          <div className=" flex items-center justify-between w-full">
            <p className=" text-xl">dont have an account?</p>
            <Link to="/register">
              <span className=" underline-offset-8 hover:underline decoration-blue-700">
                signup
              </span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
