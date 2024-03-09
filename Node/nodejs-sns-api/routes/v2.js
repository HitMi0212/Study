const express = require('express');
const { verifyToken, apiLimiter } = require('../middlewares');
const { createToken, tokenTest, getMyPosts, getPostsByHashtag } = require('../controllers/v2');

const router = express.Router();

router.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    next();
});

// /v2/token
router.post('/token', apiLimiter, createToken); // req.body.clientSecret
router.get('/test', verifyToken, apiLimiter, tokenTest);

// GET /v2/posts/my
router.get('/posts/my', verifyToken, apiLimiter, getMyPosts);
// GET /v2/posts/hashtag/:title
router.get('/posts/hashtag/:title', verifyToken, apiLimiter, getPostsByHashtag);

module.exports = router;