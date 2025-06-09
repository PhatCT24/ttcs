import { pool } from './database.js';

export async function timkiemXe(name, startDate, endDate){
    try{
        const [rows] = await pool.execute(
            'SELECT * FROM tblXe WHERE ten LIKE ? AND ID NOT IN (SELECT tblXeID FROM tblXeThue WHERE NOT (ngay_ket_thuc < ? OR ngay_bat_dau > ?))',
            [`%${name}%`, startDate, endDate]
        );
        return rows;
    } catch (error) {
        console.error(error);
        throw new Error('Loi khi tim kiem danh sach xe');
    }
}