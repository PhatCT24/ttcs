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
