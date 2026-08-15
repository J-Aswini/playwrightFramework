import { Pool } from "pg";
export const pool = new Pool({
    user: process.env.USER, //postgresSQL username
    host: 'localhost', // whee the database is hosted
    database: 'db5', //database name we want to connect
    password: '21012002',  //password for the database user
    port: 5432,    //port number for the database connection
});


export async function closeDbConnection(){
await pool.end()
}