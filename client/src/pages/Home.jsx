import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div className=" grid grid-rows-10 grid-col-6 gap-4 max-w-6xl mx-auto h-[96vh]">
      <Header />
      <Sidebar />
      <div className="overflow-y-auto rounded-2xl row-span-9 col-span-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
