import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
const CreateBlog = () => {
  const { loggedInUser } = useSelector((state) => state.user);
  console.log(loggedInUser._id);
  const formData = new FormData();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  formData.set("title", title);
  formData.set("author", author);
  formData.set("description", description);
  formData.set("image", image);
  formData.set("createdBy", loggedInUser._id);
  console.log(formData.get("createdBy"));
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/createblog", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    console.log(data);
  };
  console.log(formData);
  return (
    <div className="flex items-center justify-center min-h-full">
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col items-center gap-4"
      >
        <h1 className=" text-3xl capitalize font-bold">Create Blog</h1>
        <div className="flex items-center gap-4 flex-col">
          <input
            className="p-3 w-full bg-gray-800 outline-none rounded-lg"
            onChange={(e) => setTitle(e.target.value)}
            type="title"
            placeholder="title"
            id="title"
          />
          <input
            className="p-3 w-full bg-gray-800 outline-none rounded-lg"
            onChange={(e) => setAuthor(e.target.value)}
            type="author"
            placeholder="author"
            id="author"
          />
          <input
            className="p-3 w-full bg-gray-800 outline-none rounded-lg"
            onChange={(e) => setDescription(e.target.value)}
            type="description"
            placeholder="description"
            id="description"
          />
          <input
            className="p-3 w-full bg-gray-800 outline-none rounded-lg"
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
          />
          <Button className=" text-2xl w-full">Create</Button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
