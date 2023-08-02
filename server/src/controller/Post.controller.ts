import { Request, Response } from 'express';
import Post from '../models/Post.model';
import mongoose from 'mongoose';
import logger from '../utils/logger';
import PostModel from '../models/Post.model';

const createPost = (req: Request, res: Response) => {
  if (!req.body || !req.body.title || !req.body.content) {
    return res.status(400).json({ message: 'Missing required fields ' });
  }

  const { title, content } = req.body;

  const post = new Post({
    _id: new mongoose.Types.ObjectId(),
    title,
    content
  });

  return post
    .save()
    .then((post) => res.status(201).json({ post }))
    .catch((error) => {
      logger.error(error);
      res.status(500).json({ error });
    });
};

const getSinglePost = (req: Request, res: Response) => {
  const postId = req.params.postId;

  return PostModel.findById(postId)
    .then((post) => {
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }

      return res.status(200).json(post);
    })
    .catch((error) => {
      logger.error(error);
      res.status(500).json({ error });
    });
};

const getAllPosts = (req: Request, res: Response) => {
  return PostModel.find()
    .then((posts) => res.status(200).json(posts))
    .catch((error) => {
      logger.error(error);
      res.status(500).json({ error });
    });
};

const updatePost = (req: Request, res: Response) => {
  const postId = req.params.postId;
  const { title, content } = req.body;

  return PostModel.findById(postId).then((post) => {
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    post.title = title || post.title;
    post.content = content || post.content;
    return post
      .save()
      .then((post) => res.status(200).json(post))
      .catch((error) => {
        logger.error(error);
        res.status(500).json({ error });
      });
  });
};

const deletePost = (req: Request, res: Response) => {
  const postId = req.params.postId;

  return PostModel.findByIdAndDelete(postId)
    .then((post) => {
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }

      return res.status(200).json({ message: 'Post deleted successfully' });
    })
    .catch((error) => {
      logger.error(error);
      res.status(500).json({ error });
    });
};

export default { createPost, getSinglePost, getAllPosts, updatePost, deletePost };
