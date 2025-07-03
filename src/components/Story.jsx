// Componente Story
const Story = ({ username, avatar, isViewed }) => {
  return (
    <div className="flex flex-col items-center space-y-1 cursor-pointer">
      <div className={`p-0.5 rounded-full ${isViewed ? 'bg-gray-300' : 'bg-gradient-to-tr from-yellow-400 to-purple-600'}`}>
        <div className="bg-white p-0.5 rounded-full">
          <img
            src={avatar}
            alt={username}
            className="w-14 h-14 rounded-full object-cover"
          />
        </div>
      </div>
      <span className="text-xs text-gray-600 truncate max-w-16">{username}</span>
    </div>
  );
};
export default Story;
