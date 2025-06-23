import { useParams } from "react-router-dom";
import { useGetPostQuery } from "../redux/api";

const ViewPost = () => {
  const { id } = useParams();
  const { data: post, isLoading } = useGetPostQuery(Number(id));

  if (isLoading) return <p>Loading...</p>;
  if (!post) return <p>Post not found</p>;

  return (
    <div>
      <h1 className="text-xl mb-2">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default ViewPost;
