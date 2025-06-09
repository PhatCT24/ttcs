import { pool } from './database.js';

function pad(num, size) {
    let s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
}

// Hàm lấy số thứ tự tiếp theo cho từng bảng (giả sử bạn đã có hàm getMaxId cho từng bảng)
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

export async function addDonThue(idkh, xeThueDichVu, ngaybd, ngaykt, giathuexe, idthechap, thechapSL) {
    try {
        const xeThueIDs = {};
        const donThueIDs = {};

        // 1. Thêm vào tblXeThue cho từng xe
        for (const xeID of Object.keys(xeThueDichVu)) {
            const xeThueID = await getNextId('tblXeThue', 'XT');
            xeThueIDs[xeID] = xeThueID;
            await pool.query(
                `INSERT INTO tblXeThue (ID, tblXeID, gia, ngay_bat_dau, ngay_ket_thuc, so_luong, ghi_chu) VALUES (?, ?, ?, ?, ?, ?, ?)`,
                [xeThueID, xeID, giathuexe[xeID], ngaybd, ngaykt, 1, '']
            );
        }

        // 2. Thêm vào tblDonThue cho từng xe thuê
        for (const xeID of Object.keys(xeThueDichVu)) {
            const donThueID = await getNextId('tblDonThue', 'DT');
            donThueIDs[xeID] = donThueID;
            await pool.query(
                `INSERT INTO tblDonThue (ID, tblKhachHangtblThanhVienID, tblXeThueID, so_luong, ngay_dat, ghi_chu, tra_donNV, tra_donKH) VALUES (?, ?, ?, ?, NOW(), ?, FALSE, FALSE)`,
                [donThueID, idkh, xeThueIDs[xeID], 1, '']
            );
        }

        // 3. Thêm vào tblDVSuDung cho từng dịch vụ của từng xe (nếu có)
        for (const xeID of Object.keys(xeThueDichVu)) {
            const dvList = xeThueDichVu[xeID];
            if (Array.isArray(dvList) && dvList.length > 0) {
                for (const dvID of dvList) {
                    const dvSuDungID = await getNextId('tblDVSuDung', 'DVS'); // Sửa ở đây
                    await pool.query(
                        `INSERT INTO tblDVSuDung (ID, tblXeThueID, tblDichVuID, so_luong, gia) VALUES (?, ?, ?, ?, ?)`,
                        [dvSuDungID, xeThueIDs[xeID], dvID, 1, 0]
                    );
                }
            }
        }

        // 4. Thêm vào tblTheChapTrenDT cho từng đơn thuê
        for (const xeID of Object.keys(xeThueDichVu)) {
            const theChapTrenDTID = await getNextId('tblTheChapTrenDT', 'TCDT');
            await pool.query(
                `INSERT INTO tblTheChapTrenDT (ID, tblDonThueID, tblTheChapID, so_luong, gia) VALUES (?, ?, ?, ?, ?)`,
                [theChapTrenDTID, donThueIDs[xeID], idthechap, thechapSL, 0]
            );
        }

        return { success: true, xeThueIDs, donThueIDs };
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