import { Pool } from "pg";
export const pool = new Pool({
    user: process.env.USER,
    host: 'localhost',
    database: 'db5',
    password: '21012002',
    port: 5432,
});


export async function closeDbConnection(){
await pool.end()
}