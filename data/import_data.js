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
//     console.log(res.rows[1]);
// })

// for (const cat of catsData) {
//     // console.log(cat.label);
//     const query = `
//         INSERT INTO category (label, route)
//         VALUES ($1, $2);`
//     client.query(query, [cat.label, cat.route], (err, res) => {
//         if(err) console.log(err);
//         console.log(res);
//     });
// };

for (const post of postsData) {
    let query;
    switch (post.category) {
        case `Accueil`:
            post.category = 1;
            console.log(post.category);
            query = `
                insert into post (slug, title, excerpt, content, category_id) values ($1, $2, $3, $4, $5);`
            client.query(query, [post.slug, post.title, post.excerpt, post.content, post.category], (err, res) => {
                if(err) console.log(err);
                if(res) console.log(`Insert ok for ${post.title}`);
            });
            break;
        case `Angular`:
            post.category = 2;
            console.log(post.category);
            query = `
            insert into post (slug, title, excerpt, content, category_id) values ($1, $2, $3, $4, $5);`
            client.query(query, [post.slug, post.title, post.excerpt, post.content, post.category], (err, res) => {
                if(err) console.log(err);
                if(res) console.log(`Insert ok for ${post.title}`);
            });
            
            break;
        case `React`:
            post.category = 3;
            console.log(post.category);
            query = `
            insert into post (slug, title, excerpt, content, category_id) values ($1, $2, $3, $4, $5);`
            client.query(query, [post.slug, post.title, post.excerpt, post.content, post.category], (err, res) => {
                if(err) console.log(err);
                if(res) console.log(`Insert ok for ${post.title}`);
            });
            
        break;
        case `O’clock`:
            post.category = 4;
            console.log(post.category);            
            query = `
            insert into post (slug, title, excerpt, content, category_id) values ($1, $2, $3, $4, $5);`
            client.query(query, [post.slug, post.title, post.excerpt, post.content, post.category], (err, res) => {
                if(err) console.log(err);
                if(res) console.log(`Insert ok for ${post.title}`);
            });
            
        break;
        case `Autre`:
            post.category = 5;
            console.log(post.category);
            query = `
            insert into post (slug, title, excerpt, content, category_id) values ($1, $2, $3, $4, $5);`
            client.query(query, [post.slug, post.title, post.excerpt, post.content, post.category], (err, res) => {
                if(err) console.log(err);
                if(res) console.log(`Insert ok for ${post.title}`);
            });
        break;
        default:
            break;
    };
}
