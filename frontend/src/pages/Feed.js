import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiHeart, FiMessageCircle, FiShare2 } from 'react-icons/fi';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/posts`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setPosts(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Your Feed</h1>
      
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post._id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <img 
                src={post.author?.profilePicture} 
                alt={post.author?.username}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-bold">{post.author?.username}</p>
                <p className="text-gray-500 text-sm">{new Date(post.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
            
            <p className="mb-4">{post.content}</p>
            
            {post.images && post.images.map((img, idx) => (
              <img key={idx} src={img} alt="post" className="w-full rounded-lg mb-4" />
            ))}
            
            <div className="flex justify-between text-gray-600 pt-4 border-t">
              <button className="flex items-center hover:text-red-500"><FiHeart className="mr-2" /> {post.likes?.length || 0}</button>
              <button className="flex items-center hover:text-blue-500"><FiMessageCircle className="mr-2" /> {post.comments?.length || 0}</button>
              <button className="flex items-center hover:text-green-500"><FiShare2 className="mr-2" /> Share</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
