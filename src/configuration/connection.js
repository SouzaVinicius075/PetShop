import * as dotenv from 'dotenv'
dotenv.config()
import knex from 'knex';
const configuration = ({
    client: process.env.CLIENT,
    connection: {
        host: process.env.HOST,
        user: process.env.DBUSER,
        password: process.env.DBPASSWORD,
        database: process.env.DATABASE,
        port: process.env.DBPORT
    }
});
const myknex = knex(configuration)

export default myknex