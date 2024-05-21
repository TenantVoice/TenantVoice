const express = require('express');
const postControllers = require('../controllers/postControllers');
const checkAuthentication = require('../middleware/checkAuthentication');
const commentControllers = require('../controllers/commentController');
const postRouter = express.Router();

postRouter.post('/', checkAuthentication, postControllers.addPost);
postRouter.post('/:id/comments', commentControllers.addComment)

postRouter.get('/', postControllers.getAllPosts);
postRouter.get('/:id', postControllers.getPostById);
postRouter.patch('/:id', checkAuthentication, postControllers.updateDescription);
postRouter.delete('/:id', checkAuthentication, postControllers.deletePost);

module.exports = postRouter;
