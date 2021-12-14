const client = require('../database');

class Post {

    constructor(obj={}) {
        for (const propName in obj) {
            this[propName] = obj[propName];
        }
    }

    static async findAll() {
        const {rows} = await client.query('SELECT * FROM post');
        return rows.map(row => new Post(row));
        /*
        const posts = [];
        for (const row of rows) {
            const post = new Post(row);
            posts.push(post);
        }
        return posts;
        */
    }

    static async findOne(id) {
        const {rows} = await client.query('SELECT * FROM post WHERE id=$1', [id]);
        //on vérifie qu'on a bien obtenu des data de la BDD
        if (rows[0]) { // if (rows[0] !== undefined)
            return new Post(rows[0]);
        } else {
            console.log(`No post found for id ${id}`);
            return null;
        }
    }

    static async findByCategory(catId) {
        const {rows} = await client.query('SELECT * FROM post WHERE category_id=$1', [catId]);
        return rows.map(row => new Post(row));
    }

}

module.exports = Post;