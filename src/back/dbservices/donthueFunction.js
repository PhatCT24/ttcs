import { pool } from './database.js';
import DonThue from '../models/DonThue.js';
import XeThue from '../models/XeThue.js';

// export async function addDonThue(DonThue dt){
//     try {
//         const [result] = await pool.query(`
//             INSERT INTO tblDonThue (ID, tblKhachHangID, tblXeID, ngay_thue, ngay_tra, trang_thai)
//             VALUES (?, ?, ?, ?, ?, ?)
//         `, [dt.getID(), dt.getTblKhachHangID(), dt.getTblXeID(), dt.getNgayThue(), dt.getNgayTra(), dt.getTrangThai()]);
//         const [result2] = await pool.query(`
//             INSERT INTO tblXeThue`)
//         return { id: result.insertId };
//     } catch (error) {
//         console.error(error);
//         throw new Error('Lỗi khi thêm đơn thuê');
//     }
// }