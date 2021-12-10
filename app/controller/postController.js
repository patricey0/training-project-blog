//import post model
const {Post} = require(`../models`);
const Joi = require('joi');
const { valid } = require('joi');

const schema = Joi.object({
    slug: Joi.string().required(),
    title: Joi.string().required(),
    excerpt: Joi.number().required(),
    content: Joi.string().required()
});

//methods
module.exports = {

    getPosts: async function (req, res) {
        try {
            const posts = await Post.findAll({
            });
            res.status(200).send(posts);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getOnePost: async function (req, res) {
        const id = req.params.id;
        try {
            const post = await Post.findByPk(1, {
                include: 'categories'
            })
            res.status(200).send(post);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getPostByCat: async function (req, res) {
        const id = req.params.id;
        try {
            const posts = Post.findAll({
            })
            res.status(200).send(posts);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    createPost: async function (req,res) {
        
        try {
            const validation = schema.validate(req.body);
            if(validation.error)throw new Error(`données invalide`);
            const post = await Post.create(req.body);
            res.status(200).send(post)
        } catch (error) {
            res.status(500).send(error.message);
        }
    }


}