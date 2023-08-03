import express from 'express';
import PostController from '../controller/Post.controller';

const postRouter = express.Router();

postRouter.post('/create', PostController.createPost);
postRouter.get('/get/:postId', PostController.getSinglePost);
postRouter.get('/getall', PostController.getAllPosts);
postRouter.put('/update/:postId', PostController.updatePost);
postRouter.delete('/delete/:postId', PostController.deletePost);

export = postRouter;
