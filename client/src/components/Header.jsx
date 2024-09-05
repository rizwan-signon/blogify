import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const { loggedInUser } = useSelector((state) => state.user);
  console.log(loggedInUser);
  return (
    <div className="col-span-6 row-span-1 rounded-xl p-2 flex items-center justify-between">
      <h1 className=" text-4xl font-bold uppercase">blogify</h1>
      {loggedInUser ? (
        <h1 className=" text-3xl uppercase">{loggedInUser.userName}</h1>
      ) : (
        <div className=" flex items-center gap-4">
          <Link to={"/login"}>
            <Button className="text-xl capitalize">login</Button>
          </Link>
          <Link to={"/register"}>
            <Button className="text-xl capitalize">Register</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
