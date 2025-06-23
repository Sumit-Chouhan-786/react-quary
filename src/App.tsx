import { Routes, Route, Link } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import ViewPost from "./components/ViewPost"
import AllPosts from "./components/AllPosts";

function App() {
  return (
    <div className="p-4">
      <nav className="space-x-4 mb-4">
        <Link to="/">All Posts</Link>
        <Link to="/create">Create Post</Link>
      </nav>

      <Routes>
        <Route path="/" element={<AllPosts />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/view/:id" element={<ViewPost />} />
      </Routes>
    </div>
  );
}

export default App;
