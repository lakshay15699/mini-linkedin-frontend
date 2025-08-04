import Navbar from '../components/Navbar';
import { useState } from 'react';

const Profile = () => {
  // Mock user data
  const user = {
    name: 'Lakshay Mehta',
    email: 'lakshay@example.com',
    bio: 'Aspiring Full-Stack Developer. Passionate about building modern web apps.',
    joined: 'Joined August 2025',
  };

  // Mock user posts
  const userPosts = [
    {
      id: 1,
      content: 'Excited to start my journey in full-stack development!',
      timestamp: '2 days ago',
    },
    {
      id: 2,
      content: 'Built my first MERN stack project!',
      timestamp: '1 week ago',
    },
  ];

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-3xl font-bold text-blue-600">
            {user.name.charAt(0)}
          </div>
          <h2 className="text-xl font-semibold mt-4">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="mt-2 text-gray-700 italic">"{user.bio}"</p>
          <p className="text-sm text-gray-400 mt-1">{user.joined}</p>
        </div>

        <hr className="my-6" />

        <h3 className="text-lg font-semibold mb-4">Posts by {user.name}</h3>
        <div className="space-y-4">
          {userPosts.map((post) => (
            <div key={post.id} className="border rounded-lg p-4 shadow-sm">
              <p className="text-gray-800">{post.content}</p>
              <p className="text-xs text-gray-400 mt-2">{post.timestamp}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;