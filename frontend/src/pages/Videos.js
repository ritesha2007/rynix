import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiPlay, FiStar, FiDownload } from 'react-icons/fi';

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('all');

  useEffect(() => {
    fetchVideos();
  }, [category]);

  const fetchVideos = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/videos?category=${category}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setVideos(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching videos:', error);
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-8">Watch Videos</h1>
      
      <div className="flex gap-4 mb-8 overflow-x-auto">
        {['all', 'movie', 'series', 'short', 'educational'].map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-lg whitespace-nowrap ${category === cat ? 'bg-purple-500 text-white' : 'bg-gray-200'}`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <div className="relative group">
              <img 
                src={video.thumbnail} 
                alt={video.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <FiPlay size={48} className="text-white" />
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2 line-clamp-2">{video.title}</h3>
              
              <div className="flex items-center mb-2">
                <FiStar className="text-yellow-500 mr-2" />
                <span className="text-sm">{video.rating?.toFixed(1)} • {video.views} views</span>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  {video.isPaid ? (
                    <p className="text-lg font-bold text-blue-600">₹{video.price}</p>
                  ) : (
                    <p className="text-green-600 font-semibold">Free</p>
                  )}
                  <p className="text-xs text-gray-500">{video.duration} min</p>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition">
                  <FiPlay size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
