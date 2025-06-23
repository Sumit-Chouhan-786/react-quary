import { useParams, useNavigate } from "react-router-dom";
import { useGetPostQuery, useUpdatePostMutation } from "../redux/api";
import { useState, useEffect } from "react";

const EditPost = () => {
  const { id } = useParams();
  const { data: post } = useGetPostQuery(Number(id));
  const [updatePost] = useUpdatePostMutation();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [post]);

  const handleSubmit = async () => {
    await updatePost({ id: Number(id), data: { title, content } });
    navigate("/");
  };

  return (
    <div>
      <h1 className="text-xl mb-4">Edit Post</h1>
      <input value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2 block mb-2" />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} className="border p-2 block mb-2" />
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2">
        Update
      </button>
    </div>
  );
};

export default EditPost;
