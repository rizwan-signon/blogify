import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
const Protected = () => {
  const { loggedInUser } = useSelector((state) => state.user);
  return <div>{loggedInUser ? <Outlet /> : <Navigate to="/" />}</div>;
};

export default Protected;
