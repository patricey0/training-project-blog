const sequelize = require('../database/database');
const {DataTypes, Model} = require('sequelize');

class Post extends Model {};

Post.init({
    slug: DataTypes.TEXT,
    title: DataTypes.TEXT,
    excerpt: DataTypes.TEXT,
    content: DataTypes.TEXT
}, {
    sequelize,
    tableName: 'post'
});

module.exports = Post;