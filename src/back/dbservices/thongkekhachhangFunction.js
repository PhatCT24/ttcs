import { pool } from './database.js';

export async function getThongKeKH(ngaybd, ngaykt){
    if (!ngaybd || !ngaykt) {
        throw new Error('ngaybd hoặc ngaykt bị thiếu hoặc undefined');
    }
    try{
        const [results] = await pool.execute(`
            SELECT DISTINCT a.ID, a.ten, a.dia_chi, a.so_dien_thoai,
                (SELECT IFNULL(SUM(DATEDIFF(LEAST(b.ngay_ket_thuc, ?), GREATEST(b.ngay_bat_dau, ?)) * b.so_luong), 0)
                FROM tblXeThue b, tblDonThue d
                WHERE b.ID = d.tblXeThueID AND d.tblKhachHangtblThanhVienID = a.ID AND b.ngay_ket_thuc > ? AND b.ngay_bat_dau < ?) 
                AS tong_so_ngay_thue,
                (SELECT IFNULL(SUM(b.so_luong), 0)
                FROM tblXeThue b, tblDonThue d
                WHERE b.ID = d.tblXeThueID AND d.tblKhachHangtblThanhVienID = a.ID AND b.ngay_ket_thuc > ? AND b.ngay_bat_dau < ?) 
                AS tong_so_lan_thue,
                (SELECT IFNULL(SUM(DATEDIFF(LEAST(b.ngay_ket_thuc, ?), GREATEST(b.ngay_bat_dau, ?)) * b.so_luong * b.gia
                    + IFNULL((SELECT SUM(dv.gia * dv.so_luong) 
                    FROM tblDVSuDung dv WHERE dv.tblXeThueID = b.ID), 0)), 0)
                FROM tblXeThue b, tblDonThue d
                WHERE b.ID = d.tblXeThueID AND d.tblKhachHangtblThanhVienID = a.ID AND b.ngay_ket_thuc > ? AND b.ngay_bat_dau < ?) 
                AS tong_doanh_thu
            FROM tblThanhVien a, tblKhachHang kh
            WHERE a.ID = kh.tblThanhVienID
            ORDER BY tong_doanh_thu DESC, tong_so_ngay_thue DESC
        `, [ngaykt, ngaybd, ngaybd, ngaykt, ngaybd, ngaykt, ngaykt, ngaybd, ngaybd, ngaykt]);
        return results;
    } catch (error) {
        console.error('Error fetching Thong Ke Khach Hang:', error);
        throw error;
    }
}