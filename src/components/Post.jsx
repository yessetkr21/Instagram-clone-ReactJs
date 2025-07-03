import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';

const Post = ({ post, onLike, onComment }) => {
  const [commentInput, setCommentInput] = useState("");

  const handleSubmitComment = () => {
    if (commentInput.trim()) {
      onComment(post.id, commentInput.trim());
      setCommentInput("");
    }
  };

  return (
    <div className="bg-white border border-gray-300 rounded-lg mb-6 overflow-hidden">
      {/* Header del post */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <img
            src={post.userAvatar}
            alt={post.username}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="font-semibold text-sm">{post.username}</span>
          <span className="text-gray-400 text-sm">• {post.timeAgo}</span>
        </div>
        <button className="text-gray-600">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Imagen del post */}
      <div className="relative">
        <img
          src={post.image}
          alt="Post"
          className="w-full aspect-square object-cover"
        />
      </div>

      {/* Acciones del post */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => onLike(post.id)}
              className={`transition-colors ${post.isLiked ? 'text-red-500' : 'text-gray-700'}`}
            >
              <Heart className={`w-6 h-6 ${post.isLiked ? 'fill-current' : ''}`} />
            </button>
            <button className="text-gray-700">
              <MessageCircle className="w-6 h-6" />
            </button>
            <button className="text-gray-700">
              <Send className="w-6 h-6" />
            </button>
          </div>
          <button className="text-gray-700">
            <Bookmark className="w-6 h-6" />
          </button>
        </div>

        {/* Likes */}
        <div className="mb-2">
          <span className="font-semibold text-sm">{post.likes} Me gusta</span>
        </div>

        {/* Caption */}
        <div className="mb-2">
          <span className="font-semibold text-sm mr-2">{post.username}</span>
          <span className="text-sm">{post.caption}</span>
        </div>

        {/* Comentarios */}
        {post.comments.length > 0 && (
          <div className="mb-2">
            <button className="text-gray-500 text-sm mb-1">
              Ver los {post.comments.length} comentarios
            </button>
            {post.comments.slice(0, 2).map(comment => (
              <div key={comment.id} className="mb-1">
                <span className="font-semibold text-sm mr-2">{comment.username}</span>
                <span className="text-sm">{comment.text}</span>
              </div>
            ))}
          </div>
        )}

        {/* Agregar comentario */}
        <div className="flex items-center pt-2 border-t border-gray-100">
          <input
            type="text"
            placeholder="Agrega un comentario..."
            className="flex-1 text-sm outline-none"
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSubmitComment();
              }
            }}
          />
          <button
            className={`text-sm font-semibold ml-2 ${
              commentInput.trim() ? 'text-blue-500' : 'text-gray-400 cursor-not-allowed'
            }`}
            onClick={handleSubmitComment}
            disabled={!commentInput.trim()}
          >
            Publicar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
