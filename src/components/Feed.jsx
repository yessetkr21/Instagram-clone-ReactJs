import Stories from './Stories'; // Ajusta la ruta si es necesario
import Post from './Post'; // también necesitas Post
// Componente Feed
const Feed = ({ posts, onLike, onComment }) => {
  return (
    <div className="max-w-lg mx-auto">
      <Stories />
      {posts.map(post => (
        <Post 
          key={post.id} 
          post={post} 
          onLike={onLike}
          onComment={onComment}
        />
      ))}
    </div>
  );
};
export default Feed;