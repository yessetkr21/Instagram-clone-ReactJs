// Componente Profile
const Profile = ({ posts }) => {
  const userPosts = posts.filter(post => post.username === 'tu_usuario');
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white border border-gray-300 rounded-lg p-6 mb-6">
        <div className="flex items-center space-x-8 mb-6">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-4">
              <h1 className="text-2xl font-light ">Juan_acevedo234</h1>
              <button className="bg-blue-500 text-white px-4 py-1 rounded font-medium hover:bg-blue-600 transition-colors">
                Editar perfil
              </button>
            </div>
            <div className="flex space-x-8 mb-4">
              <span><strong>{userPosts.length}</strong> publicaciones</span>
              <span><strong>156</strong> seguidores</span>
              <span><strong>89</strong> seguidos</span>
            </div>
            <div>
              <h2 className="font-semibold">Juan Acevedo</h2>
              <p className="text-gray-600">Web Developer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-1">
        {userPosts.map(post => (
          <div key={post.id} className="aspect-square bg-gray-100">
            <img
              src={post.image}
              alt="Post"
              className="w-full h-full object-cover hover:opacity-90 transition-opacity cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
  
};
export default Profile;

