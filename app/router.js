const  {Router} = require('express');

const postController = require('./controllers/postController');
const categoryController = require('./controllers/categoryController');

const router = Router();

/**
 * GET /v1/posts
 * @summary Responds with all posts in database
 * @route GET /v1/posts
 * @group Posts
 * @returns {array<Post>} 200 - An array of posts
 */
router.get('/posts', postController.findAll);

/**
 * GET /v1/categories
 * @summary Responds with all catagories in database
 * @route GET /v1/categories
 * @tags Categories
 * @returns {array<Category>} 200 - An array of categories
 */
router.get('/categories', categoryController.findAll);

/**
 * GET /v1/posts/{id}
 * @summary Responds with one post from database
 * @route GET /v1/posts/{id}
 * @tags Posts
 * @param {number} id.path.required The id of the post to fetch
 * @returns {Post} 200 - A single post identified by its id
 * @returns {string} 404 - An error message
 * 
 */
router.get('/posts/:id(\\d+)', postController.findOne);


/**
 * GET /v1/posts/categories/{id}
 * @summary Responds with posts from a specific category in database
 * @route GET /v1/posts/categories/{id}
 * @tags Posts
 * @param {number} id.path.required The id of the desired category
 * @returns {array<Post>} 200 - An array of posts with a specific category, can be empty
 */
router.get('/posts/categories/:id(\\d+)', postController.findByCategory)

/**
 * Expected json object in request.body
 * @typedef {Object} PostJson
 * @property {string} slug
 * @property {string} title
 * @property {string} excerpt
 * @property {string} content
 * @property {number} category_id
 */

/**
 * POST /v1/posts
 * @summary Add a new post in database
 * @tags Posts
 * @param {PostJson} request.body.required infos to add in database
 * @returns {Post} 201 - The newly created post
 * @returns {string} 500 - An error message
 */


router.post('/posts', postController.addPost);

module.exports = router;