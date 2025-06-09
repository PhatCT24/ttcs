import { addDonThue, getDonThueByIDKhachHang, updatetraxeKH, updatetraxeNV, updategiaoxeNV } from '../dbservices/donthueFunction.js';

export const addDT = async (req, res) => {
    const {idkh, xeThueDichVu, ngaybd, ngaykt, giathuexe, thechapID, thechapSL} = req.body;
    try {
        const result = await addDonThue(idkh, xeThueDichVu, ngaybd, ngaykt, giathuexe, thechapID, thechapSL);
        res.status(200).json(result);
        console.log('Thêm đơn thuê thành công:', result);
    } catch (error) {
        console.error('Lỗi khi thêm đơn thuê:', error);
        res.status(500).json({ error: 'Lỗi khi thêm đơn thuê' });
    }
}

export const getDTbyIDKhachhang = async (req, res) => {
    const { id } = req.query;
    try {
        const result = await getDonThueByIDKhachHang(id);
        res.status(200).json(result);
    } catch (error) {
        console.error('Lỗi khi lấy đơn thuê theo ID khách hàng:', error);
        res.status(500).json({ error: 'Lỗi khi lấy đơn thuê theo ID khách hàng' });
    }
}

export const traxeKH = async (req, res) => {
    const { id } = req.query;
    try {
        const result = await updatetraxeKH(id);
        res.status(200).json(result);
    } catch (error) {
        console.error('Lỗi khi cập nhật trạng thái trả xe:', error);
        res.status(500).json({ error: 'Lỗi khi cập nhật trạng thái trả xe' });
    }
}

export const traxeNV = async (req, res) => {
    const { id } = req.query;
    try {
        const result = await updatetraxeNV(id);
        res.status(200).json(result);
    } catch (error) {
        console.error('Lỗi khi cập nhật trạng thái trả xe:', error);
        res.status(500).json({ error: 'Lỗi khi cập nhật trạng thái trả xe' });
    }
}

export const giaoxeNV = async (req, res) => {
    const { id } = req.query;
    try {
        const result = await updategiaoxeNV(id);
        res.status(200).json(result);
    } catch (error) {
        console.error('Lỗi khi cập nhật trạng thái giao xe:', error);
        res.status(500).json({ error: 'Lỗi khi cập nhật trạng thái giao xe' });
    }
}