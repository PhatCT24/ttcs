import { pool } from './database.js';

export async function addDonThue(idkh, idxe, ngaybt, ngaykt, xethuedichvu, idthechap){
    try {
        const [result] = await pool.query(`
            INSERT INTO tblDonThue (ID, tblKhachHangID, tblXeID, ngay_thue, ngay_tra, trang_thai)
            VALUES (?, ?, ?, ?, ?, ?)
        `, [dt.getID(), dt.getTblKhachHangID(), dt.getTblXeID(), dt.getNgayThue(), dt.getNgayTra(), dt.getTrangThai()]);
        const [result2] = await pool.query(`
            INSERT INTO tblXeThue`)
        return { id: result.insertId };
    } catch (error) {
        console.error(error);
        throw new Error('Lỗi khi thêm đơn thuê');
    }
}