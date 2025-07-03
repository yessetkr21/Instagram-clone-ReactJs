import React from 'react';
import Story from './Story';

const Stories = () => {
  const stories = [
    { id: 1, username: 'tu_historia', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face', isViewed: false },
    { id: 2, username: 'JuanPerez', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face', isViewed: false },
    { id: 3, username: 'andres_9823', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', isViewed: true },
    { id: 4, username: 'Miguel_moreno', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face', isViewed: false },
    { id: 5, username: 'chef', avatar: 'https://images.unsplash.com/photo-1642541724195-93b9d506b525?q=80&w=670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', isViewed: true },
    { id: 6, username: 'alberto', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', isViewed: true },
  ];

  return (
    <div className="bg-white border border-gray-300 rounded-lg p-4 mb-6">
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {stories.map(story => (
          <Story key={story.id} {...story} />
        ))}
      </div>
    </div>
  );
};

export default Stories;
