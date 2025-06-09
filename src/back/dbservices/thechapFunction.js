import { pool } from './database.js';

export async function getAllTheChap(){
    try{
        const [rows] = await pool.execute(
            'SELECT * FROM tblTheChap'
        );
        return rows;
    } catch (error) {
        console.error(error);
        throw new Error('Loi khi tim kiem danh sach the chap');
    }
}
