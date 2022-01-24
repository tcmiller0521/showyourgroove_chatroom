// import post model so that we can use mongoose methods
// to retrieve, create, update, and delete post, rooms , friends etc... using controller files

import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js';

// retrieve all posts
export const getPosts = async (req, res) => {
    try {
        const postMessage = await PostMessage.find();

        res.status(200).json(postMessage);
    } catch (error) {
        res.status(404).json({ message: error.message });
    };
};

// create post
export const createPost = async (req, res) => {
    const post= req.body;



    const newPostMessage = new PostMessage({ ...post, createdAt: new Date().toISOString() });

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    };
};