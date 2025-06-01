import {pool} from './database.js';

export async function checkLogin(username, password){
    const [rows] = await pool.execute(
        'SELECT * FROM tblThanhVien WHERE username = ? AND password = ?',
        [username, password]
    );
    if (rows.length === 0) return null;
    const user = rows[0];

    // Kiểm tra loại tài khoản
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

    return { ...user, role };
}

export async function addThanhvien(username, password, ten, ngay_sinh, email, so_dien_thoai, dia_chi) {
    try {
        const [idResult] = await pool.query('SELECT MAX(ID) AS maxId FROM tblThanhVien');
        const newId = idResult[0].maxId + 1;

        const [result] = await pool.query(`
            INSERT INTO tblThanhVien (ID, username, password, ten, ngay_sinh, email, so_dien_thoai, dia_chi)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `, [newId, username, password, ten, ngay_sinh, email, so_dien_thoai, dia_chi]);

        return { newId };
    } catch (error) {
        console.error(error);
        throw new Error('Thêm thành viên thất bại');
    }
}
