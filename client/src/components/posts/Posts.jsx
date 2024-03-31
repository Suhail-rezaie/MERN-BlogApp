import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {Array.isArray(posts) ? (
        posts.map((p) => (
          <Post key={p.id} post={p} />
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
}
