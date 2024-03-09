const express = require('express');
const { verifyToken } = require('../middlewares');
const { createToken, tokenTest, getMyPosts, getPostsByHashtag } = require('../controllers/v1');

const router = express.Router();

// /v1/token
router.post('/token', createToken); // req.body.clientSecret
router.get('/test', verifyToken, tokenTest);

// GET /v1/posts/my
router.get('/posts/my', verifyToken, getMyPosts);
// GET /v1/posts/hashtag/:title
router.get('/posts/hashtag/:title', verifyToken, getPostsByHashtag);

module.exports = router;