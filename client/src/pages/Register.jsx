import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const registerUser = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/registeruser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();

    toast({
      title: "new user added to database",
      description: "welcome to blog app",
    });
    navigate("/login");
  };
  return (
    <div className=" flex items-center justify-center min-h-[96vh] max-w-md mx-auto">
      <form onSubmit={registerUser} className=" w-full bg-gray-900 p-4">
        <h1 className=" text-4xl font-bold capitalize text-center mb-6">
          Register
        </h1>
        <div className=" flex items-center flex-col gap-4">
          <input
            onChange={handleChange}
            className="p-3 w-full rounded-lg outline-none bg-gray-800"
            type="text"
            placeholder="userName"
            id="userName"
          />
          <input
            onChange={handleChange}
            className="p-3 w-full rounded-lg outline-none bg-gray-800"
            type="text"
            placeholder="address"
            id="address"
          />
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
          <Button className="p-3 w-full text-xl font-bold">Register</Button>
          <div className=" flex items-center justify-between w-full">
            <p className=" text-xl">already have an account?</p>
            <Link to={"/login"}>
              <span className=" underline-offset-8 hover:underline decoration-blue-700">
                login
              </span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
