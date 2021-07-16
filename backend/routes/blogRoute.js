import express from 'express';
import Blog from '../models/blogModel';

const router = express.Router();

router.get("/", async (req, res) => {
    const blogs = await Blog.find({});
    res.send(blogs);
})

router.post("/", async (req, res) => {
    const blog = new Blog({
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        description: req.body.description
    });
    const newBlog = await blog.save();
    if (newBlog) {
        return res.status(201).send({ message: 'New Blog Created', data: newBlog });
    }
    return res.status(500).send({ message: 'Error in Creating Blog.' });
})

export default router;