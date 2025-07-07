import { pool } from './database.js';

function pad(num, size) {
    let s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
}

export async function getNextId(table, prefix) {
    const maxId = await getMaxId(table, prefix);
    if (!maxId) return prefix + '001';
    const num = parseInt(maxId.replace(prefix, '')) + 1;
    return prefix + num.toString().padStart(3, '0');
}

export async function getMaxId(table, prefix) {
    const [rows] = await pool.execute(
        `SELECT ID FROM ${table} WHERE ID LIKE ? ORDER BY ID DESC LIMIT 1`,
        [`${prefix}%`]
    );
    if (rows.length === 0) return null;
    return rows[0].ID;
}

export async function tinhTongTienPhaiTra(xeThueDichVu, giathuexe, ngaybd, ngaykt) {
    let tongTien = 0;
    const soNgay = (new Date(ngaykt) - new Date(ngaybd)) / (1000 * 60 * 60 * 24) + 1;

    for (const xeID of Object.keys(xeThueDichVu)) {
        const giaXe = Number(giathuexe[xeID] || 0);
        tongTien += giaXe * soNgay;

        const dvList = xeThueDichVu[xeID];
        if (Array.isArray(dvList) && dvList.length > 0) {
            for (const dvID of dvList) {
                const [rows] = await pool.query(
                    'SELECT gia FROM tblDichVu WHERE ID = ? LIMIT 1',
                    [dvID]
                );
                if (rows.length > 0) {
                    tongTien += Number(rows[0].gia);
                }
            }
        }
    }
    return tongTien;
}

export async function addDonThue(idkh, xeThueDichVu, ngaybd, ngaykt, giathuexe, idthechap, thechapSL) {
    try {
        const xeThueIDs = {};
        const donThueIDs = {};

        for (const xeID of Object.keys(xeThueDichVu)) {
            const xeThueID = await getNextId('tblXeThue', 'XT');
            xeThueIDs[xeID] = xeThueID;
            await pool.query(
                `INSERT INTO tblXeThue (ID, tblXeID, gia, ngay_bat_dau, ngay_ket_thuc, so_luong, ghi_chu) VALUES (?, ?, ?, ?, ?, ?, ?)`,
                [xeThueID, xeID, giathuexe[xeID], ngaybd, ngaykt, 1, '']
            );
        }

        for (const xeID of Object.keys(xeThueDichVu)) {
            const donThueID = await getNextId('tblDonThue', 'DT');
            donThueIDs[xeID] = donThueID;
            await pool.query(
                `INSERT INTO tblDonThue (ID, tblKhachHangtblThanhVienID, tblXeThueID, so_luong, ngay_dat, ghi_chu, tra_donNV, tra_donKH) VALUES (?, ?, ?, ?, NOW(), ?, FALSE, FALSE)`,
                [donThueID, idkh, xeThueIDs[xeID], 1, '']
            );
        }

        for (const xeID of Object.keys(xeThueDichVu)) {
            const dvList = xeThueDichVu[xeID];
            if (Array.isArray(dvList) && dvList.length > 0) {
                for (const dvID of dvList) {
                    const dvSuDungID = await getNextId('tblDVSuDung', 'DVS'); 
                    await pool.query(
                        `INSERT INTO tblDVSuDung (ID, tblXeThueID, tblDichVuID, so_luong, gia) VALUES (?, ?, ?, ?, ?)`,
                        [dvSuDungID, xeThueIDs[xeID], dvID, 1, 0]
                    );
                }
            }
        }

        for (const xeID of Object.keys(xeThueDichVu)) {
            const theChapTrenDTID = await getNextId('tblTheChapTrenDT', 'TCDT');
            await pool.query(
                `INSERT INTO tblTheChapTrenDT (ID, tblDonThueID, tblTheChapID, so_luong, gia) VALUES (?, ?, ?, ?, ?)`,
                [theChapTrenDTID, donThueIDs[xeID], idthechap, thechapSL, 0]
            );
        }

        for (const xeID of Object.keys(xeThueDichVu)) {
            const hoaDonID = await getNextId('tblHoaDon', 'HD');
            await pool.query(
                `INSERT INTO tblHoaDon (ID, tblDonThueID, tblKhachHangtblThanhVienID, ghi_chu) VALUES (?, ?, ?, ?)`,
                [hoaDonID, donThueIDs[xeID], idkh, '']
            );
        }
        const tongTien = await tinhTongTienPhaiTra(xeThueDichVu, giathuexe, ngaybd, ngaykt);
        return { success: true, xeThueIDs, donThueIDs, tongTien };
    } catch (error) {
        console.error(error);
        throw new Error('Lỗi khi thêm đơn thuê');
    }
}

export async function getDonThueByIDKhachHang(id) {
    try {
        const [rows] = await pool.execute(
            `SELECT * FROM tblDonThue WHERE tblKhachHangtblThanhVienID = ?`,
            [id]
        );
        return rows;
    } catch (error) {
        console.error(error);
        throw new Error('Lỗi khi lấy đơn thuê theo ID khách hàng');
    }
}

export async function updatetraxeKH(id) {
    try {
        const [rows] = await pool.execute(
            `UPDATE tblDonThue SET tra_donKH = TRUE WHERE ID = ?`,
            [id]
        );
        if (rows.affectedRows === 0) {
            throw new Error('Không tìm thấy đơn thuê với ID đã cho');
        }
        return { success: true };
    } catch (error) {
        console.error(error);
        throw new Error('Lỗi khi cập nhật trạng thái trả xe');
    }
}   

export async function updatetraxeNV(id) {
    try {
        const [rows] = await pool.execute(
            `UPDATE tblDonThue SET tra_donNV = TRUE WHERE ID = ?`,
            [id]
        );
        if (rows.affectedRows === 0) {
            throw new Error('Không tìm thấy đơn thuê với ID đã cho');
        }
        return { success: true };
    } catch (error) {
        console.error(error);
        throw new Error('Lỗi khi cập nhật trạng thái trả xe');
    }
}

export async function updategiaoxeNV(id) {
    try {
        const [rows] = await pool.execute(
            `UPDATE tblDonThue SET giao_xeNV = TRUE WHERE ID = ?`,
            [id]
        );
        if (rows.affectedRows === 0) {
            throw new Error('Không tìm thấy đơn thuê với ID đã cho');
        }
        return { success: true };
    } catch (error) {
        console.error(error);
        throw new Error('Lỗi khi cập nhật trạng thái giao xe');
    }
}