const client = require('../database');

/**
 * An entity representing a blog post category
 * @typedef {Object} Category
 * @property {number} id
 * @property {string} route
 * @property {string} label
 */

class Category {

    /**
     * The Category constructor
     * @param {Object} obj a litteral object with properties copied into the instance
     */
    constructor(obj={}) {
        for (const propName in obj) {
            this[propName] = obj[propName];
        }
    }

    /**
     * Fetches all categories from the database
     * @returns {Array<Category>}
     * @static
     * @async
     */
    static async findAll() {
        const {rows} = await client.query('SELECT * FROM category');
        return rows.map(row => new Category(row));
    }

}

module.exports = Category;