import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },

});

const blogModel = mongoose.model("Blogs", blogSchema);

export default blogModel;