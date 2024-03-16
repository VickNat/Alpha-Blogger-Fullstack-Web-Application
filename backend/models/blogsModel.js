const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  headline: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  postedBy: {
    type: String,
    required: true,
  },
  postedOn: {
    type: Date,
    required: true,
  },
  comments: [
    {
      content: {
        type: String,
        required: true,
      },
      postedBy: {
        type: String,
        required: true,
      },
      postedOn: {
        type: Date,
        required: true,
      },
    },
  ],
  likes: [
    {
      likedBy: {
        type: String,
        required: true,
      },
    },
  ],
  tags: [
    {
      name: {
        type: String,
        required: true,
      },
    },
  ],
  image: {
    type: String,
    required: false,
  },
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;