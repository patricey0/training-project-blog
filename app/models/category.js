//import database, type and models from sequelize
const sequelize = require('../database/database');
const {DataTypes, Model} = require('sequelize');

//init of new model has Category
class Category extends Model {};

//setting fields 
Category.init({
    label: DataTypes.TEXT,
    route: DataTypes.TEXT
}, {
    sequelize,
    tableName: 'category'
});

module.exports = Category;