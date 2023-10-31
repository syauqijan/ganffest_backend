import {Sequelize} from "sequelize";

// const db = new Sequelize(process.env.MYSQL_DB,process.env.DB_USER,process.env.DB_PASS,{
//     host: process.env.DB_HOST,
//     dialect: 'mysql'
// });

// export default db;
// const db = new Sequelize('ganffest','root','',{
//     host: 'api.ganeshafilmfestival.com',
//     dialect: 'mysql'
// });

// export default db;
const db = new Sequelize('gane2307_ganffest','gane2307_ganffest','Ganffest_database',{
    host: 'api.ganeshafilmfestival.com',
    dialect: 'mysql'
});

export default db;