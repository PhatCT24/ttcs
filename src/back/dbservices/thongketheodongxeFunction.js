import { pool } from './database.js';

export async function getThongKeTheoDongXe(ngaybd, ngaykt) {
    if (!ngaybd || !ngaykt) {
        throw new Error('ngaybd hoặc ngaykt bị thiếu hoặc undefined');
    }
    try {
        const [results] = await pool.execute(`
            SELECT a.hang,
            SUM(
                (SELECT IFNULL(SUM(DATEDIFF(LEAST(b.ngay_ket_thuc, ?), GREATEST(b.ngay_bat_dau, ?)) * b.so_luong), 0)
                FROM tblXeThue b 
                WHERE b.tblXeID = a.ID AND b.ngay_ket_thuc > ? AND b.ngay_bat_dau < ?)
            ) AS tong_so_ngay_thue,
            SUM(
                (SELECT IFNULL(SUM(b.so_luong), 0)
                FROM tblXeThue b 
                WHERE b.tblXeID = a.ID AND b.ngay_ket_thuc > ? AND b.ngay_bat_dau < ?)
            ) AS tong_so_lan_thue,
            SUM(
                (SELECT IFNULL(SUM(DATEDIFF(LEAST(b.ngay_ket_thuc, ?), GREATEST(b.ngay_bat_dau, ?)) * b.so_luong * b.gia
                    + IFNULL((SELECT SUM(dv.gia * dv.so_luong) 
                    FROM tblDVSuDung dv WHERE dv.tblXeThueID = b.ID), 0)), 0)
                FROM tblXeThue b
                WHERE b.tblXeID = a.ID AND b.ngay_ket_thuc > ? AND b.ngay_bat_dau < ?)
            ) AS tong_doanh_thu
        FROM tblXe a
        GROUP BY a.hang
        ORDER BY tong_doanh_thu DESC, tong_so_ngay_thue DESC
            `, [ngaykt, ngaybd, ngaybd, ngaykt, ngaybd, ngaykt, ngaykt, ngaybd, ngaybd, ngaykt]);
        return results;
    } catch (error){
        console.error('Loi khi lay database thong ke theo dong xe:', error);
        throw new Error('Loi khi lay database thong ke theo dong xe');
    }
}