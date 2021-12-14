const Post = require('../models/post');

module.exports = {
    findAll: async (_, response) => {
        const posts = await Post.findAll();
        response.json(posts);
    },

    findOne: async (request, response) => {
        const id = parseInt(request.params.id, 10);
        const post = await Post.findOne(id);
        response.json(post);
    },

    findByCategory: async (request, response) => {
        const catId = parseInt(request.params.id, 10);
        const posts = await Post.findByCategory(catId);
        response.json(posts);
    }

}