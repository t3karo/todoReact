import { pool } from '../helpers/db.js';

const insertUser= async (email,password) => {
    return await pool.query('insert into account (email,password) values ($1,$2) returning *',[email,password])
}

const selectUserByEmail = async (email) => {
    return await pool.query('select * from account where email=$1',[email])
}
export { insertUser,selectUserByEmail }