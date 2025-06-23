import { useState } from "react";
import { useCreatePostMutation } from "../redux/api";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [createPost] = useCreatePostMutation();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    await createPost({ title, content });
    navigate("/");
  };

  return (
    <div>
      <h1 className="text-xl mb-4">Create Post</h1>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="border p-2 block mb-2" />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" className="border p-2 block mb-2" />
      <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2">
        Create
      </button>
    </div>
  );
};

export default CreatePost;
