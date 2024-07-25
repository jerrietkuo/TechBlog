const router = require('express').Router();
const { Blog, User } = require('../models');

// Render homepage
router.get('/', async (req, res) => {
  try {
    console.log('Homepage route hit');
    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const posts = blogData.map((post) => post.get({ plain: true }));
    console.log('Posts:', posts);

    res.render('home', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.error('Error fetching blog data:', err);
    res.status(500).json(err);
  }
});

module.exports = router;