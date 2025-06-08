import {pool} from './database.js';
import KhachHang from '../models/KhachHang.js';

export async function checkLogin(username, password){
    try{
        const [rows] = await pool.execute(
            'SELECT * FROM tblThanhVien WHERE username = ? AND password = ?',
            [username, password]
        );
        if (rows.length === 0) return null;
        const user = rows[0];
    
        let role = 'unknown';
        const [khach] = await pool.execute(
            'SELECT * FROM tblKhachHang WHERE tblThanhVienID = ?',
            [user.ID]
        );
        if (khach.length > 0) role = 'khachhang';
    
        const [nv] = await pool.execute(
            'SELECT * FROM tblNhanVien WHERE tblNVCuaHangtblThanhVienID = ?',
            [user.ID]
        );
        if (nv.length > 0) role = 'nhanvien';
        
        const [ql] = await pool.execute(
            'SELECT * FROM tblQuanLy WHERE tblNVCuaHangtblThanhVienID = ?',
            [user.ID]
        );
        if (ql.length > 0) role = 'quanly';
        return { id: user.ID, role };
    } catch (error){
        console.error(error);
        throw new Error('Loi khi dang nhap');
    }
}

export async function addThanhvien(username, password, ten, ngay_sinh, email, so_dien_thoai, dia_chi) {
    try {
        const [idResult] = await pool.query('SELECT MAX(CAST(ID AS UNSIGNED)) AS maxId FROM tblThanhVien');
        const newId = idResult[0].maxId ? String(Number(idResult[0].maxId) + 1) : '1';

        await pool.query(`
            INSERT INTO tblThanhVien (ID, username, password, ten, ngay_sinh, email, so_dien_thoai, dia_chi)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `, [newId, username, password, ten, ngay_sinh, email, so_dien_thoai, dia_chi]);

        await pool.query(`
            INSERT INTO tblKhachHang (tblThanhVienID)
            VALUES (?)
        `, [newId]);

        const khachhang = new KhachHang(newId);

        return { newId, khachhang };
    } catch (error) {
        console.error(error);
        throw new Error('Lỗi khi thêm thành viên');
    }
}
