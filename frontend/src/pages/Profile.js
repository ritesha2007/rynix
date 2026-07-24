import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiEdit, FiLogOut, FiUsers } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [followers, setFollowers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/user/profile`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(response.data);
      setFollowers(response.data.followers || []);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching profile:', error);
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (!user) return <div className="text-center mt-10">User not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-6">
            <img 
              src={user.profilePicture || 'https://via.placeholder.com/120'} 
              alt={user.username}
              className="w-24 h-24 rounded-full border-4 border-blue-500"
            />
            <div>
              <h1 className="text-3xl font-bold">{user.username}</h1>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-gray-500 mt-2">{user.bio || 'No bio yet'}</p>
            </div>
          </div>
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition">
            <FiLogOut /> Logout
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-2xl font-bold">{user.posts?.length || 0}</p>
            <p className="text-gray-600">Posts</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-2xl font-bold">{followers.length}</p>
            <p className="text-gray-600">Followers</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-2xl font-bold">{user.following?.length || 0}</p>
            <p className="text-gray-600">Following</p>
          </div>
        </div>

        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition">
          <FiEdit /> Edit Profile
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <FiUsers /> Recent Followers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {followers.slice(0, 6).map((follower) => (
            <div key={follower._id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <img 
                  src={follower.profilePicture || 'https://via.placeholder.com/40'} 
                  alt={follower.username}
                  className="w-10 h-10 rounded-full"
                />
                <p className="font-semibold">{follower.username}</p>
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
