import { useGetPostsQuery, useDeletePostMutation } from "../redux/api";
import { Link } from "react-router-dom";

const AllPosts = () => {
  const { data: posts, isLoading } = useGetPostsQuery();
  const [deletePost] = useDeletePostMutation();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-xl mb-4">All Posts</h1>
      {posts?.map((post) => (
        <div key={post.id} className="border p-3 mb-3">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <div className="space-x-2 mt-2">
            <Link to={`/view/${post.id}`}>View</Link>
            <Link to={`/edit/${post.id}`}>Edit</Link>
            <button onClick={() => deletePost(post.id)} className="text-red-500">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllPosts;
