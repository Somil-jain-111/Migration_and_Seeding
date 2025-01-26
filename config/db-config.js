require("dotenv").config();
const {Sequelize,Op} = require("sequelize");

var host = process.env.DB_HOST;
var user = process.env.DB_USER;
var pass =process.env.DB_PASS;
var name =process.env.DB_NAME;


const sequelize = new Sequelize(name, user, pass, {
    host: host,
    dialect: "mysql",
    operatorsAliases: false,
    pool: {
        max: 20,
        min: 0,
        acquire: 60000,
        idle: 10000
    },
});

sequelize.authenticate().then(() => {
    // //console.log(config);
    console.log('Connection has been established successfully.+++++++++');
}).catch((err) => {
    console.log('Unable to connect to the database:----------', err);
})

sequelize.sync({ force: false, logging: false});

const db = {};
db.sequelize = sequelize;
db.Op = Op;
db.Sequelize = Sequelize;

module.exports = db;
