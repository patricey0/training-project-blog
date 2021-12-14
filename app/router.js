const  {Router} = require('express');

const postController = require('./controllers/postController');
const categoryController = require('./controllers/categoryController');

const router = Router();

router.get('/posts', postController.findAll);

router.get('/categories', categoryController.findAll);

router.get('/posts/:id(\\d+)', postController.findOne);

router.get('/posts/categories/:id(\\d+)', postController.findByCategory)

module.exports = router;