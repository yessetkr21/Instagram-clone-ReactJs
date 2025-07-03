import React, { useState } from 'react';
import Profile from './components/Profile'
import Header from './components/Header';
import Feed from './components/Feed';
import CreatePost from './components/CreatePost';
import Stories from './components/Stories';
import Story from './components/Story';
import Post from './components/Post';


// Componente principal App
// Componente principal App
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: 'Andres_Cadavid',
      userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=500&fit=crop',
      caption: 'Hermoso atardecer en la montaña 🌅',
      likes: 42,
      isLiked: false,
      timeAgo: '2h',
      comments: [
        { id: 1, username: 'amiga2', text: '¡Qué hermosa foto!' },
        { id: 2, username: 'viajero', text: '¿Dónde fue esto?' }
      ]
    },
    {
      id: 2,
      username: 'chef_juan',
      userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Pizza casera perfecta 🍕 Receta en mi bio!',
      likes: 89,
      isLiked: true,
      timeAgo: '4h',
      comments: [
        { id: 3, username: 'amigo1', text: 'Se ve deliciosa!' }
      ]
    }
  ]);

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            isLiked: !post.isLiked,
            likes: post.isLiked ? post.likes - 1 : post.likes + 1
          }
        : post
    ));
  };

  const handleComment = (postId, commentText) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? {
            ...post,
            comments: [...post.comments, {
              id: Date.now(),
              username: 'Yr211404',
              text: commentText
            }]
          }
        : post
    ));
  };

  const handleCreatePost = (newPostData) => {
    const newPost = {
      id: Date.now(),
      ...newPostData,
      likes: 0,
      isLiked: false,
      timeAgo: 'ahora',
      comments: []
    };
    setPosts([newPost, ...posts]);
    setCurrentPage('home');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="pt-20 pb-8 px-4">
        {currentPage === 'home' && (
          <Feed 
            posts={posts} 
            onLike={handleLike}
            onComment={handleComment}
          />
        )}
        {currentPage === 'create' && (
          <CreatePost onCreatePost={handleCreatePost} />
        )}
        {currentPage === 'profile' && (
          <Profile posts={posts} />
        )}
      </main>
    </div>
  );
};

export default App;
