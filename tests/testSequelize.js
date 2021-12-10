require('dotenv').config();
const {Post, Category} = require(`../app/models`);

const test = async function (request, response){
    try {
        const posts = await Post.findByPk(1);
        console.log(`ayé, la BDD m\'a répondu : ${posts.slug}`);
    } catch (error) {
        console.log(error.message);
    }
};

test();