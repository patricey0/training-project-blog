require('dotenv').config();
const {Post, Category} = require(`../app/models`);

Post.findAll()
.then(console.log('Request ok'))
.catch(error => console.log(error.message));