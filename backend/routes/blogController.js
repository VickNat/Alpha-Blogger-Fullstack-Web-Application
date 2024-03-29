const express = require('express');
const router = express.Router();
const Blog = require('../models/blogsModel');

// Get all blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
    console.log("Blogs fetched successfully", blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("Error fetching blogs", error);
  }
})

// Get all blogs with user id
router.get('/user/:id', async (req, res) => {
  try {
    const blogs = await Blog.find({ postedBy: req.params.id });
    res.json(blogs);
    console.log("Blogs fetched successfully", blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("Error fetching blogs", error);
  }
})

// Get one blog
router.get('/:id', getBlog, (req, res) => {
  res.json(res.blog);
})

// Get single blog middleware
async function getBlog(req, res, next) {
  let blog;
  try {
    blog = await Blog.findById(req.params.id);
    if (blog == null) {
      return res.status(404).json({ message: 'Blog not found' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.blog = blog;
  next();
}

// Create one blog
router.post('/', async (req, res) => {
  const blog = new Blog({
    headline: req.body.headline,
    content: req.body.content,
    postedBy: req.body.postedBy,
    postedOn: req.body.postedOn,
    // comments: req.body.comments,
    // likes: req.body.likes,
    tags: req.body.tags,
    // image: req.body.image,
  });

  try {
    const newBlog = await blog.save();
    res.status(201).json(newBlog);
    console.log("Blog created successfully", newBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log("Error creating blog", error);
  }
})

// Update one blog
router.patch('/:id', getBlog, async (req, res) => {
  if (req.body.headline != null) {
    res.blog.headline = req.body.headline;
  }
  if (req.body.content != null) {
    res.blog.content = req.body.content;
  }
  if (req.body.postedBy != null) {
    res.blog.postedBy = req.body.postedBy;
  }
  if (req.body.postedOn != null) {
    res.blog.postedOn = req.body.postedOn;
  }
  if (req.body.comments != null) {
    res.blog.comments = req.body.comments;
  }
  if (req.body.likes != null) {
    res.blog.likes = req.body.likes;
  }
  if (req.body.tags != null) {
    res.blog.tags = req.body.tags;
  }
  if (req.body.image != null) {
    res.blog.image = req.body.image;
  }

  try {
    const updatedBlog = await res.blog.save();
    res.json(updatedBlog);
    console.log("Blog updated successfully", updatedBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log("Error updating blog", error);
  }
})

// Delete one blog
router.delete('/:id', getBlog, async (req, res) => {
  try {
    await res.blog.remove();
    res.json({ message: 'Blog deleted successfully' });
    console.log("Blog deleted successfully");
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("Error deleting blog", error);
  }
})

// Add comment to a blog
router.patch('/:id/comment', getBlog, async (req, res) => {
  const comment = {
    content: req.body.content,
    postedBy: req.body.postedBy,
    postedOn: req.body.postedOn,
  }

  res.blog.comments.push(comment);

  try {
    const updatedBlog = await res.blog.save();
    res.json(updatedBlog);
    console.log("Comment added successfully", updatedBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log("Error adding comment", error);
  }
})

// Add like to a blog
router.patch('/:id/like', getBlog, async (req, res) => {
  const like = {
    likedBy: req.body.likedBy,
  }

  res.blog.likes.push(like);

  try {
    const updatedBlog = await res.blog.save();
    res.json(updatedBlog);
    console.log("Like added successfully", updatedBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log("Error adding like", error);
  }
})

// Remove like from a blog
router.patch('/:id/unlike', getBlog, async (req, res) => {
  const like = {
    likedBy: req.body.likedBy,
  }

  res.blog.likes.pull(like);

  try {
    const updatedBlog = await res.blog.save();
    res.json(updatedBlog);
    console.log("Like removed successfully", updatedBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log("Error removing like", error);
  }
})

// Remove comment from a blog
router.patch('/:id/uncomment', getBlog, async (req, res) => {
  const comment = {
    content: req.body.content,
    postedBy: req.body.postedBy,
    postedOn: req.body.postedOn,
  }

  res.blog.comments.pull(comment);

  try {
    const updatedBlog = await res.blog.save();
    res.json(updatedBlog);
    console.log("Comment removed successfully", updatedBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log("Error removing comment", error);
  }
})

// Edit comment on a blog
router.patch('/:id/editcomment', getBlog, async (req, res) => {
  const comment = {
    content: req.body.content,
    postedBy: req.body.postedBy,
    postedOn: req.body.postedOn,
  }

  res.blog.comments.pull(comment);

  const newComment = {
    content: req.body.newContent,
    postedBy: req.body.postedBy,
    postedOn: req.body.postedOn,
  }

  res.blog.comments.push(newComment);

  try {
    const updatedBlog = await res.blog.save();
    res.json(updatedBlog);
    console.log("Comment edited successfully", updatedBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log("Error editing comment", error);
  }
})

module.exports = router;