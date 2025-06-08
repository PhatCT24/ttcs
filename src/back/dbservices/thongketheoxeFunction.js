import { pool } from './database.js';

export async function getThongKeTheoXe(ngaybd, ngaykt, hangxe) {
    if (!ngaybd || !ngaykt || !hangxe) {
        throw new Error('ngaybd, ngaykt hoac hangxe bi thieu hoac undefined');
    }
    try {
        const [results] = await pool.execute(`
            SELECT a.ID, a.ten, a.bien_so,  
                (SELECT IFNULL(SUM(DATEDIFF(LEAST(b.ngay_ket_thuc, ?), GREATEST(b.ngay_bat_dau, ?)) * b.so_luong), 0)
                FROM tblXeThue b 
                WHERE b.tblXeID = a.ID AND b.ngay_ket_thuc > ? AND b.ngay_bat_dau < ?) 
                AS tong_so_ngay_thue,
                (SELECT IFNULL(SUM(b.so_luong), 0)
                FROM tblXeThue b 
                WHERE b.tblXeID = a.ID AND b.ngay_ket_thuc > ? AND b.ngay_bat_dau < ?) 
                AS tong_so_lan_thue,
                (SELECT IFNULL(SUM(DATEDIFF(LEAST(b.ngay_ket_thuc, ?), GREATEST(b.ngay_bat_dau, ?)) * b.so_luong * b.gia
                    + IFNULL((SELECT SUM(dv.gia * dv.so_luong) 
                    FROM tblDVSuDung dv WHERE dv.tblXeThueID = b.ID), 0)), 0)
                FROM tblXeThue b
                WHERE b.tblXeID = a.ID AND b.ngay_ket_thuc > ? AND b.ngay_bat_dau < ?) 
                AS tong_doanh_thu
            FROM tblXe a
            WHERE a.hang LIKE ?
            ORDER BY tong_doanh_thu DESC, tong_so_ngay_thue DESC
            `, [ngaykt, ngaybd, ngaybd, ngaykt, ngaybd, ngaykt, ngaykt, ngaybd, ngaybd, ngaykt, `%${hangxe}%`]);
            if (results.length === 0) {
                throw new Error('Khong tim thay thong tin xe nao voi hang xe da cho');
            }
        return results;
    } catch (error){
        console.error('Loi khi lay database thong ke theo xe:', error);
        throw new Error('Loi khi lay database thong ke theo xe');
    }
}