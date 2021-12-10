//import category model
const {Category} = require(`../models`);

const Joi = require('joi');
const { valid } = require('joi');

const schema = Joi.object({
    route: Joi.string().required(),
    label: Joi.string().required()
});

//methods
module.exports = { 
    getCategories: async function (req, res) {
        try {
            const categories = await Category.findAll();
            res.status(200).send(categories);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    createCategory: async function (req, res) {
        try {
            const validation = schema.validate(req.body);
            if(validation.error)throw new Error(`données invalide`);
            const category = await Category.create(req.body);
            res.status(200).send(category);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}