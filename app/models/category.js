const client = require('../database');

class Category {

    constructor(obj={}) {
        for (const propName in obj) {
            this[propName] = obj[propName];
        }
    }

    static async findAll() {
        const {rows} = await client.query('SELECT * FROM category');
        return rows.map(row => new Category(row));
    }

}

module.exports = Category;