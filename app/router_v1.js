// express router import
const {Router} = require('express');


//controllers import
const postController = require(`./controller/postController`);
const categoryController = require(`./controller/categoryController`);


//router init
const router = Router();

//routes
router.get(`/posts`, postController.getPosts);
router.get(`/posts/:id(\d{2})`, postController.getOnePost);
router.get(`/posts/category/:id(\d{2})`, postController.getPostByCat);
router.post(`/posts`, postController.createPost);

router.get(`/categories`, categoryController.getCategories);
router.post(`/categories`, categoryController.createCategory);

module.exports = router;