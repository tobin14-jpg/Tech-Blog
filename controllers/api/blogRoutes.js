const router = require('express').Router();
const { request } = require('express');
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
      const newBlog = await Blog.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newBlog);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.put('/:id', withAuth, async (req, res) => {
    try {
      const title = req.body.title;
      const content = req.body.content;
  
      const blogData = await Blog.findByPk(req.params.id);
  
      if (blogData === null) {
  
        res.status(400).json('Not found!');
        return;
      }
  
      blogData.title = (title !== undefined) ? title : blogData.title;
      blogData.content = (content !== undefined) ? content : blogData.content;
  
      const newBlogData = await blogData.save();
      res.json(newBlogData);
    } catch (err) {
      console.error(err);
      res.status(400).json(err);
    }
  });
  
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      await Blog.destroy({
        where: {
          id: req.body.blog_id
        }
      });
  
      res.status(200).json('success!');
    } catch (err) {
      console.error(err);
      res.status(400).json(err);
  
    }
  });

module.exports = router; 