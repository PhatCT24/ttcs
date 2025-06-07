import { pool } from './database.js';   

export async function getDichVu(name){
    try{
        const [rows] = await pool.execute(
            'SELECT * FROM tblDichVu WHERE ten like ?',
            [`%${name}%`]
        );
        return rows;
    } catch (error){
        console.error(error);
        throw new Error('Loi khi tim kiem danh sach dich vu');
    }
}