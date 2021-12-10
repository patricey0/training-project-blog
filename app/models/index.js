// import models sequelize
const Post = require(`./post`);
const Category = require(`./category`);

// association category and post
Category.hasMany(Post, {
    foreignKey: 'category_id',
    as: 'categories'
});

const index = {
    Post,
    Category
};

module.exports = index;