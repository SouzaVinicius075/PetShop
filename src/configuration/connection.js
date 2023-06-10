import * as dotenv from 'dotenv'
dotenv.config()
import knex from 'knex';
const configuration = ({
    client: process.env.CLIENT,
    connection: {
        host: process.env.DBHOST,
        user: process.env.DBUSER,
        password: process.env.DBPASSWORD,
        database: process.env.DATABASE,
        port: process.env.DBPORT,
        ssl: {
            rejectUnauthorized: false,
        },
    }
});
const myknex = knex(configuration)

export default myknex