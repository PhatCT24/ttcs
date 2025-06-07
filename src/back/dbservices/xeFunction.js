import { pool } from './database.js';

export async function getXe(name, startDate, endDate){
    try{
        const [rows] = await pool.execute(
            'SELECT * FROM tblXe WHERE ten LIKE ? AND ID NOT IN (SELECT ID from tblXeThue WHERE ngay_bat_dau > ? AND ngay_ket_thuc < ?)',
            [`%${name}%`, startDate, endDate]
        );
        return rows;
    } catch (error) {
        console.error(error);
        throw new Error('Loi khi tim kiem danh sach xe');
    }
}