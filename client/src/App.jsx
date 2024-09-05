import Blogs from "./pages/Blogs";
import Landing from "./pages/Landing";
import CreateBlog from "./pages/CreateBlog";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SavedBlogs from "./pages/SavedBlogs";
import Protected from "./components/Protected";
import MyBlogs from "./pages/MyBlogs";
const App = () => {
  return (
    <div className=" bg-black text-white p-3">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<Protected />}>
            <Route path="/home" element={<Home />}>
              <Route path="/home" element={<Blogs />} />
              <Route path="/home/createBlog" element={<CreateBlog />} />
              <Route path="/home/savedblogs" element={<SavedBlogs />} />
              <Route path="/home/myblogs" element={<MyBlogs />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
