const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  thumbnail: String,
  videoUrl: {
    type: String,
    required: true
  },
  uploader: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  
  category: {
    type: String,
    enum: ['movie', 'series', 'short', 'educational'],
    default: 'movie'
  },
  
  price: {
    type: Number,
    default: 0
  },
  isPaid: {
    type: Boolean,
    default: false
  },
  
  duration: Number,
  resolution: {
    type: String,
    enum: ['720p', '1080p', '4K'],
    default: '1080p'
  },
  
  views: {
    type: Number,
    default: 0
  },
  
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  
  ratings: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    rating: Number,
    review: String
  }],
  
  isPublished: {
    type: Boolean,
    default: false
  },
  
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Video', videoSchema);
