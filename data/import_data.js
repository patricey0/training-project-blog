const postsData = require(`./posts.json`);
const catsData = require(`./categories.json`);

const pg = require('pg');

const client = new pg.Client({
    user: 'postgres',
    password: 'js4life',
    database: 'oblog',
    host: 'localhost',
    port: 5432,
});

client.connect();

// client.query('SELECT * FROM category;', (err, res)=>{
//     if(err) console.log(err);
//     console.log(res.rows);
// })

for (const cat of catsData) {
    // console.log(cat.label);
    const query = `
        INSERT INTO category (label, route)
        VALUES ($1, $2);`
    client.query(query, [cat.label, cat.route], (err, res) => {
        if(err) console.log(err);
        console.log(res);
    })
}
