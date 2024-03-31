import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  if (!Array.isArray(posts)) {
    // If posts is not an array, return null or render an appropriate error message
    return <p>No posts available</p>;
  }

  return (
    <div className="posts">
      {posts.map((p) => (
        <Post key={p.id} post={p} />
      ))}
    </div>
  );
}
