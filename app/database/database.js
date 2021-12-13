const {Sequelize} = require('sequelize');

let config = process.env.PG_URL;

if (process.env.NODE_ENV === 'production') {
    config = process.env.HEROKU_POSTGRESQL_YELLOW_URL;
}

const sequelize = new Sequelize(config, {
    define: {
        timestamps: false,
        underscored: true
    }
});

module.exports = sequelize;