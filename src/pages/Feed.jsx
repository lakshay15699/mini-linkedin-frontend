import React, { useEffect, useState } from 'react';
import axios from '../api/axios';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Feed</h2>
      {loading ? (
        <p>Loading posts...</p>
      ) : (
        posts.map(post => (
          <div key={post._id} className="bg-white rounded-xl shadow-md p-4 mb-4">
            <h3 className="font-bold text-lg">{post.title}</h3>
            <p className="text-gray-700">{post.content}</p>
            <p className="text-sm text-gray-500 mt-2">By {post.author?.username || 'Unknown'}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Feed;